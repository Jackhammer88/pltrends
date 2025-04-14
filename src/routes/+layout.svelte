<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { ghToken } from '$lib/stores/langs';
	import { TokenInfo } from '$lib/api/apiService';

	let { children } = $props();

	onMount(() => {
		let initialValue: TokenInfo | null = null;
		const raw = localStorage.getItem("ghToken");
		if (raw) {
			try {
				const parsed = JSON.parse(raw);
				// минимальная валидация
				if (parsed?.AccessToken && parsed?.ExpiresIn) {
					initialValue = new TokenInfo(parsed.AccessToken, parsed.ExpiresIn);
				}
			} catch {
				console.warn("Invalid token format in localStorage");
			}
		}

		ghToken.set(initialValue);
	});
</script>

{@render children()}
