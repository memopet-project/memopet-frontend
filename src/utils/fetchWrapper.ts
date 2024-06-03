const FETCH_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

// const BASE_URL = process.env.BACKEND_URL || 'http://localhost:3000';
// const BASE_URL = 'https://jsonplaceholder.typicode.com/';

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

export const fetchWrapper = async (url: string, options?: RequestInit) => {
  try {
    // const urlWithBase = `${BASE_URL}${url}`;
    const urlWithBase = `${url}`;

    const response = await fetch(urlWithBase, {
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
