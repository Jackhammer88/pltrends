import { getLangPlot, getLangs, type LangPlotsMap, type ProgLanguage } from '$lib/api/data';
import { get, writable } from 'svelte/store';
import {} from '$app/stores';
import type { TokenInfo } from '$lib/api/auth';

export const ghToken = writable<TokenInfo | null>(null);

export const langs = writable<ProgLanguage[]>([]);

export const langPlots = writable<LangPlotsMap>({});

export async function loadLangs(): Promise<void> {
	let loaded = false;

	langs.update((list) => {
		loaded = list.length > 0;
		return list;
	});
	if (loaded) return;

	const result = await getLangs();

	if (Array.isArray(result)) {
		langs.set(result);
	} else {
		console.error('API error:', result.Code, result.Description);
	}
}

export async function loadLangPlot(lang: string): Promise<string | null> {
	const current = get(langPlots);

	// Если уже есть — вернуть
	if (current[lang]) {
		return current[lang];
	}

	// Если нет — получить и сохранить
	const result = await getLangPlot(lang);

	if (typeof result === 'string') {
		langPlots.update((plots) => ({
			...plots,
			[lang]: result
		}));
		return result;
	} else {
		console.error('Failed to load lang stats:', result);
		return null;
	}
}
