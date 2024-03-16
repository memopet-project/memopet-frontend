import type { Axios } from 'axios'
import axios from 'axios';

const api: Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api;