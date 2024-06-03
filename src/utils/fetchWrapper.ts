import { NextURL } from 'next/dist/server/web/next-url';

const FETCH_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const TEST_URL = 'https://jsonplaceholder.typicode.com';

const defaultOptions = {
  method: FETCH_METHODS.GET,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    'credentials': 'include',
    'cache': 'no-cache',
  },
};

const isServer = typeof window === 'undefined';

const rewrite = (url: string): string => {
  if (url.startsWith('/api')) {
    return `${BASE_URL}${url.replace('/api', '')}`;
  }

  if (url.startsWith('/todos')) {
    return `${TEST_URL}${url}`;
  }

  return `${BASE_URL}/${url}`;
}

export const fetchWrapper = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(isServer ? rewrite(url) : `${url}`, {
      ...defaultOptions,
      headers: {
        ...(options?.headers || {}),
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch Wrapper Error:', error);
    throw error;
  }
};

export default fetchWrapper;
