import { ghToken } from '$lib/stores/langs';
import { get } from 'svelte/store';
import { BASE_URL } from './const';

export class ApiError {
	constructor(
		public Code: number,
		public Description: string
	) {}
}

export interface ProgLanguage {
	Id: number;
	Name: string;
}

export interface LangResponseDto {
	langs: string[];
}

export async function getLangs(): Promise<ProgLanguage[] | ApiError> {
	const token = get(ghToken);

	const headers: HeadersInit = {
		'Content-Type': 'application/json'
	};

	if (token) {
		headers['X-Authorization'] = `Bearer ${token.access_token}`;
	}

	const res = await fetch(`${BASE_URL}/data/langs`, {
		method: 'GET',
		headers: headers
	});
	if (!res.ok) {
		const errorBody = await res.text();
		return new ApiError(res.status, errorBody || 'Unknown error');
	}
	try {
		const json: LangResponseDto = await res.json();
		return json.langs.map((name, index) => ({ Id: index, Name: name }));
	} catch {
		return new ApiError(500, 'Invalid JSON from server');
	}
}

export type LangPlotsMap = Record<string, string>;

export async function getLangPlot(language: string): Promise<string | ApiError> {
	const token = get(ghToken);

	const headers: HeadersInit = {
		'Content-Type': 'application/json'
	};

	if (token) {
		headers['X-Authorization'] = `Bearer ${token.access_token}`;
	}

	const res = await fetch(`${BASE_URL}/data/lang?lang=${encodeURIComponent(language)}`, {
		method: 'GET',
		headers: headers
	});
	if (!res.ok) {
		const errorBody = await res.text();
		return new ApiError(res.status, errorBody || 'Unknown error');
	}
	try {
		const blob = await res.blob();

		return await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result as string);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
	} catch {
		return new ApiError(500, 'Invalid JSON from server');
	}
}
