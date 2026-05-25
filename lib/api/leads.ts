import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export interface SearchLeadsParams {
  country: string
  state: string
  city: string
  zip?: string
  socks5?: string
}

export interface Lead {
  name: string
  email: string
  phone: string
  address: string
}

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function searchLeads(params: SearchLeadsParams): Promise<Lead[]> {
  try {
    const response = await apiClient.post<Lead[]>('/api/leads', params)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.error || error.message
      throw new Error(message)
    }
    throw error
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    await apiClient.get('/health')
    return true
  } catch {
    return false
  }
}
