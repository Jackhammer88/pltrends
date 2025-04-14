<script lang="ts">
	import { langs, loadLangs } from "$lib/stores/langs";
	import { onMount } from "svelte";

	export let selectedLanguages: string[] = [];
	export let onSelect: (lang: string) => void;
	export let onClose: () => void;

	let query = "";
	let filtered: string[] = [];

	let inputEl: HTMLInputElement | null = null;
	let dropdownVisible = false;
	let dropdownStyles = "";

	function onOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	onMount(() => {
		loadLangs();

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	$: filtered = query
		? $langs
				.filter((l) =>
					l.toLowerCase().includes(query.toLowerCase()) &&
					!selectedLanguages.includes(l) // <- исключаем уже выбранные
				)
				.slice(0, 10)
		: [];

	function handleSelect(lang: string) {
		onSelect(lang);
		onClose();
	}

	$: if (inputEl && filtered.length) {
		const rect = inputEl.getBoundingClientRect();
		dropdownStyles = `
			position: fixed;
			top: ${rect.bottom}px;
			left: ${rect.left}px;
			width: ${rect.width}px;
			z-index: 2000;
		`;
		dropdownVisible = true;
	} else {
		dropdownVisible = false;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="dialog-overlay" on:click={onOverlayClick}>
	<div class="dialog-content">
		<h2 class="title">Выберите язык</h2>

		<input
			class="lang-search-input"
			type="text"
			placeholder="Начните вводить название..."
			bind:value={query}
			bind:this={inputEl}
			autocomplete="off"
		/>

		<div class="dialog-actions">
			<button class="app-button close-btn" on:click={onClose}>Закрыть</button>
		</div>
	</div>
</div>

{#if dropdownVisible}
	<ul class="lang-dropdown" style={dropdownStyles}>
		{#each filtered as lang}
			<li on:click={() => handleSelect(lang)}>{lang}</li>
		{/each}
	</ul>
{/if}

<style>
.dialog-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
}

.dialog-content {
	background: white;
	padding: 20px 30px;
	border-radius: 12px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
	width: 320px;
	font-family: Arial, sans-serif;
	display: flex;
	flex-direction: column;
	align-items: stretch;
}

.dialog-content h2 {
	font-size: 20px;
	margin-bottom: 15px;
	text-align: center;
}

.lang-search-input {
	width: 100%;
	padding: 10px;
	border: 2px solid #ccc;
	border-radius: 6px;
	box-sizing: border-box;
	margin-bottom: 20px;
}

.dialog-actions {
	display: flex;
	justify-content: flex-end;
}

/* Dropdown стили */
.lang-dropdown {
	position: fixed;
	max-height: 200px;
	overflow-y: auto;
	background: white;
	border: 1px solid #ccc;
	border-radius: 6px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	list-style: none;
	padding: 0;
	margin: 0;
}

.lang-dropdown li {
	padding: 8px 12px;
	cursor: pointer;
}

.lang-dropdown li:hover {
	background: #f0f0f0;
}
</style>
