<script lang="ts">
	import { loadLangPlot } from '$lib/stores/langs';
	import { onMount } from 'svelte';

	export let language = '';

	export let onRemove: (lang: string) => void;

	let isZoomed: boolean = false;
	let hasError: boolean = false;
	let imageUrl: string | null = null;

	onMount(async () => {
		hasError = false;
		let result = await loadLangPlot(language);
		if (result && typeof result === 'string' && result.length > 0) {
			imageUrl = result;
		} else {
			hasError = true;
		}
	});

	function removeLanguage() {
		onRemove(language);
	}

	function toggleZoom() {
		if (!imageUrl) return;
		isZoomed = !isZoomed;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if isZoomed}
	<div class="overlay" on:click={toggleZoom}></div>
{/if}
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="image-container" class:zoomed={isZoomed} on:click={toggleZoom}>
	{#if !isZoomed}
		<div class="lang-header" on:click|stopPropagation>
			<p>{language}</p>
			<button title="Закрыть" class="remove-btn" on:click={() => removeLanguage()}>✖</button>
		</div>
	{/if}
	{#if imageUrl}
		<img src={imageUrl} alt="Plot" draggable="false" on:contextmenu|preventDefault />
	{:else}
		<div class="spinner-container">
			{#if hasError}
				<div class="error-message">Ошибка загрузки</div>
			{:else}
				<div class="spinner"></div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		z-index: 99;
	}

	.remove-btn {
		background: none;
		border: none;
		color: #007bff;
		font-size: 20px;
		cursor: pointer;
		transition: color 0.2s ease;
	}

	.remove-btn:hover {
		color: #0067d5;
		transform: scale(1.1);
	}

	.lang-header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 6px 12px;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(6px);
		font-weight: bold;
		font-size: 14px;
		z-index: 10;
		height: 36px;
	}

	.image-container {
		width: 300px;
		min-height: 200px;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		position: relative;
		background: #f3f3f3;
		border-radius: 8px;
		overflow: hidden;
		transition: all 0.2s ease;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(0);
	}

	.image-container:hover {
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
		transform: translateY(-4px);
	}

	.image-container img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.image-container.zoomed {
		position: fixed;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
		width: auto;
		height: auto;
		background: rgba(0, 0, 0, 0.2);
		z-index: 100;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
		cursor: zoom-out;
		border-radius: 0;
		overflow: visible;
	}

	.image-container.zoomed img {
		width: auto;
		height: auto;
		max-width: 90vw;
		max-height: 90vh;
		object-fit: contain;
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}

	/* Спиннер */
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

	.error-message {
		color: red;
		font-size: 16px;
		text-align: center;
		padding: 10px;
		user-select: none;
	}
</style>
