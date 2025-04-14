<script lang="ts">
	import { BASE_URL } from '$lib/api/apiService';
	import AddLangModal from '$lib/components/AddLangModal.svelte';
    import LangTrends from '$lib/components/LangTrends.svelte';
	import { ghToken } from '$lib/stores/langs';

    const authUrl = `${BASE_URL}/auth/signin`

    let selectedLanguages: string[] = [];
    let showModal = false;

    function openDialog() {
        showModal = true;
    }

    function closeDialog() {
        showModal = false;
    }

    function addLanguage(language: string) {
        if (!selectedLanguages.includes(language)) {
            selectedLanguages = [...selectedLanguages, language];
        }
    }

    function removeLanguage(lang: string) {
        selectedLanguages = selectedLanguages.filter(l => l !== lang);
    }
</script>

{#if $ghToken == null}
	<div class="unauth-container">
		<p>🔐 Пожалуйста, войдите через GitHub, чтобы продолжить</p>
		<a href="{authUrl}">
			<button class="app-button">Войти через GitHub</button>
		</a>
	</div>
{:else}
    <div class="content">
        <h1 id="title">Тренды языков программирования: анализ роста.</h1>
        <p>📊 Сколько репозиториев создавалось каждый год? Давайте разберёмся!</p>

        <!-- Кнопка "Добавить язык" -->
        <div class="controls">
            <button class="app-button add-lang-btn" on:click={openDialog}>Добавить язык</button>
        </div>

        <!-- Контейнер для графиков -->
        <LangTrends 
            languages={selectedLanguages}
            onRemove={removeLanguage} />
    </div>

    {#if showModal}
        <AddLangModal
            selectedLanguages={selectedLanguages}
            onSelect={addLanguage}
            onClose={closeDialog}
        />
    {/if}
{/if}

<style>
    .content {
        width: 100%;
        text-align: center;
        z-index: 2; /* Чтобы текст был поверх */
    }

    .controls {
        display: flex;
        justify-content: center; /* Выравниваем кнопку вправо */
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        width: 100%; /* Растягиваем на всю ширину */
    }

    .add-lang-btn {
        display: flex;
        align-items: center;
    }
</style>
