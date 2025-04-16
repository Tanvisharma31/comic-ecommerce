import { toast } from "sonner"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

interface ApiResponse<T> {
  data?: T
  error?: string
}

async function handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
  if (!response.ok) {
    const error = await response.json()
    toast.error(error.message || "Something went wrong")
    throw new Error(error.message || "Something went wrong")
  }
  return response.json()
}

export async function apiGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return handleResponse<T>(response)
  } catch (error) {
    toast.error("Network error")
    throw error
  }
}

export async function apiPost<T>(
  endpoint: string,
  data: any
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return handleResponse<T>(response)
  } catch (error) {
    toast.error("Network error")
    throw error
  }
}

export async function apiPut<T>(
  endpoint: string,
  data: any
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return handleResponse<T>(response)
  } catch (error) {
    toast.error("Network error")
    throw error
  }
}

export async function apiDelete<T>(endpoint: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return handleResponse<T>(response)
  } catch (error) {
    toast.error("Network error")
    throw error
  }
} 