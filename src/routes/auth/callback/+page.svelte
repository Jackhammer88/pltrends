<script lang="ts">
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { ghToken } from "$lib/stores/langs";
	import { exchangeCode, TokenInfo } from "$lib/api/apiService";

	onMount(async () => {
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");

		if (!code) {
			console.error("Missing code");
			goto("/");
			return;
		}

		let r = await exchangeCode(code);
		console.log(r);
		
		
		if (r instanceof TokenInfo) {
			ghToken.update(t => r);
		}
		goto("/");
	});
</script>

<p>Подождите, выполняется авторизация...</p>
