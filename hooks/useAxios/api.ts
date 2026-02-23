import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.rawg.io/api";

const RAWG_API_KEY =
  process.env.NEXT_PUBLIC_RAWG_API_KEY || "d069f7cca53046eeaf28a6fc7e4771b2";

if (!RAWG_API_KEY) {
  console.warn(
    "NEXT_PUBLIC_RAWG_API_KEY is not configured. API requests will fail.",
  );
}

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: RAWG_API_KEY,
  },
});

api.interceptors.request.use(
  (config) => {
    config.params = {
      key: RAWG_API_KEY,
      ...config.params,
    };
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<{ error?: string }>) => {
    const status = error.response?.status;
    const errorMessages: Record<number, string> = {
      401: "Invalid or missing API Key",
      404: "Resource not found",
      429: "Rate limit exceeded",
    };

    console.error(
      `API Error${status ? ` (${status})` : ""}:`,
      errorMessages[status!] || error.response?.data?.error || error.message,
    );

    return Promise.reject(error);
  },
);
