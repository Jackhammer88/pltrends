<script lang="ts">
	import LangTrend from "./LangTrend.svelte";

    export let languages: string[] = [];
    export let onRemove: (lang: string) => void;
    
    function removeLanguage(lang: string) {
        onRemove(lang);
    }
</script>

<div class="lang-trends-container">
    {#each languages as lang (lang)}
        <LangTrend language={lang} onRemove={removeLanguage} />
    {/each}
</div>

<style>
.lang-trends-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
    padding: 20px;
    margin-top: 20px;
    
    overflow-y: auto; /* Включаем вертикальный скролл */
}
</style>