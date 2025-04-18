<script lang="ts">
	import { goto } from '$app/navigation';
	import { ApiError } from '$lib/api/data';
	import AddLangModal from '$lib/components/AddLangModal.svelte';
	import LangTrends from '$lib/components/LangTrends.svelte';
	import { ghToken } from '$lib/stores/langs';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
	import { exchangeCode, TokenInfo } from '$lib/api/auth';
	import { BASE_URL } from '$lib/api/const';

	const authUrl = `${BASE_URL}/auth/signinw`;

	let isLoading = false;
	let errorMessage: string | null = null;

	onMount(async () => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get('code');

		if (!code) {
			return;
		}

		isLoading = true;
		errorMessage = null;

		try {
			const result = await exchangeCode(code);

			if (result instanceof TokenInfo) {
				ghToken.set(result);
				if (dev) {
					goto('/');
				} else {
					goto('/pltrends');
				}
			} else if (result instanceof ApiError) {
				errorMessage = `Ошибка: ${result.Description}`;
				console.error(result);
			}
		} catch (err) {
			console.error('Unhandled error', err);
			errorMessage = 'Что-то пошло не так...';
		} finally {
			isLoading = false;
		}
	});

	let selectedLanguages: string[] = ['C#', 'C++', 'TypeScript'];
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
		selectedLanguages = selectedLanguages.filter((l) => l !== lang);
	}
</script>

{#if $ghToken == null}
	{#if isLoading}
		<p>Авторизация на GitHub...</p>
		<div class="spinner-container">
			<div class="spinner"></div>
		</div>
	{:else if errorMessage}
		<p style="color: red;">{errorMessage}</p>
	{:else}
		<div class="unauth-container">
			<p>🔐 Пожалуйста, войдите через GitHub, чтобы продолжить</p>
			<a href={authUrl}>
				<button class="app-button">Войти через GitHub</button>
			</a>
		</div>
	{/if}
{:else}
	<div class="content">
		<h1 id="title">Тренды языков программирования: анализ роста.</h1>
		<p>📊 Сколько репозиториев создавалось каждый год? Давайте разберёмся!</p>

		<!-- Кнопка "Добавить язык" -->
		<div class="controls">
			<button class="app-button add-lang-btn" on:click={openDialog}>Добавить язык</button>
		</div>

		<!-- Контейнер для графиков -->
		<LangTrends languages={selectedLanguages} onRemove={removeLanguage} />
	</div>

	{#if showModal}
		<AddLangModal {selectedLanguages} onSelect={addLanguage} onClose={closeDialog} />
	{/if}
{/if}

<style>
	.content {
		width: 100%;
		text-align: center;
		z-index: 2;
	}

	.controls {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		margin-bottom: 20px;
		width: 100%;
	}

	.add-lang-btn {
		display: flex;
		align-items: center;
	}

	.spinner-container {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 30px;
	}

	.spinner {
		display: flex;
		align-items: end;
		justify-content: space-between;
		width: 50px;
		height: 50px;
		border: 5px solid rgba(0, 0, 0, 0.1);
		border-top-color: #007bff;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
