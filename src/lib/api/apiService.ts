import { ghToken } from "$lib/stores/langs";
import { get } from "svelte/store";

export const BASE_URL = "https://bbaii2i41d3ecpiaumro.containers.yandexcloud.net/api/v1"

export class ApiError
{
    constructor(public Code: number, public Description: string) {}
}

export async function getLangs(): Promise<string[]|ApiError> {
    const token = get(ghToken);

    console.log(token);
    

	const headers: HeadersInit = {
		"Content-Type": "application/json"
	};

	if (token) {
		headers["X-Authorization"] = `Bearer ${token.access_token}`;
	}    

    const res = await fetch(`${BASE_URL}/data/langs`, 
        {
            method: "GET",
            headers: headers
        });
    if (!res.ok) {
        const errorBody = await res.text();
		return new ApiError(res.status, errorBody || "Unknown error");
    }
    try {
        const json = await res.json()
        return json.langs;
    } catch (ex) {
        return new ApiError(500, "Invalid JSON from server");
    }
}

export type LangPlotsMap = Record<string, string>;

export async function getLangPlot(language: string): Promise<string|ApiError> {
    const token = get(ghToken);

	const headers: HeadersInit = {
		"Content-Type": "application/json"
	};

	if (token) {
		headers["X-Authorization"] = `Bearer ${token.access_token}`;
	}    

    const res = await fetch(`${BASE_URL}/data/lang?lang=${encodeURIComponent(language)}`, 
        {
            method: "GET",
            headers: headers
        });
    if (!res.ok) {
        const errorBody = await res.text();
		return new ApiError(res.status, errorBody || "Unknown error");
    }
    try {
        const blob = await res.blob();

        return await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onloadend = () => resolve(reader.result as string);
			reader.onerror = reject;
			reader.readAsDataURL(blob);
		});
    } catch (ex) {
        return new ApiError(500, "Invalid JSON from server");
    }
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

export async function exchangeCode(code: string): Promise<TokenInfo|ApiError> {
    const token = get(ghToken);

	const headers: HeadersInit = {
		"Content-Type": "application/json"
	};

	if (token) {
		headers["X-Authorization"] = `Bearer ${token}`;
	}

    const res = await fetch(`${BASE_URL}/auth/exchange`, 
        {
            method: "POST",
            body: JSON.stringify({ "code": code })
        });
    if (!res.ok) {
        const errorBody = await res.text();
		return new ApiError(res.status, errorBody || "Unknown error");
    }
    try {
        const json = await res.json()
        return new TokenInfo(json.access_token, Number(json.expires_in))
    } catch (ex) {
        return new ApiError(500, "Invalid JSON from server");
    }
}