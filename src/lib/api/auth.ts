import { ghToken } from '$lib/stores/langs';
import { get } from 'svelte/store';
import { BASE_URL } from './const';

export class ApiError {
	constructor(
		public Code: number,
		public Description: string
	) {}
}

export class TokenInfo {
	constructor(
		public access_token: string,
		public expires_in: number, // в секундах
		public expires_at: number = Date.now() + expires_in * 1000 // в миллисекундах
	) {}

	isExpired(): boolean {
		return Date.now() > this.expires_at;
	}
}

export async function exchangeCode(code: string): Promise<TokenInfo | ApiError> {
	const token = get(ghToken);

	const headers: HeadersInit = {
		'Content-Type': 'application/json'
	};

	if (token) {
		headers['X-Authorization'] = `Bearer ${token}`;
	}

	const res = await fetch(`${BASE_URL}/auth/exchange`, {
		method: 'POST',
		body: JSON.stringify({ code: code })
	});
	if (!res.ok) {
		const errorBody = await res.text();
		return new ApiError(res.status, errorBody || 'Unknown error');
	}
	try {
		const json = await res.json();
		return new TokenInfo(json.access_token, Number(json.expires_in));
	} catch {
		return new ApiError(500, 'Invalid JSON from server');
	}
}
