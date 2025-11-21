// API client for connecting to the backend API
const API_BASE_URL = 'http://localhost:3001';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  count?: number;
}

// Generic API request function
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }
    
    return data;
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    return {
      success: false,
      message: 'Request failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Dashboard API
export const dashboardApi = {
  getStats: () => apiRequest('/api/dashboard/stats'),
};

// Users API
export const usersApi = {
  getAll: () => apiRequest('/api/users'),
  getById: (id: string) => apiRequest(`/api/users/${id}`),
};

// Organizations API
export const organizationsApi = {
  getAll: () => apiRequest('/api/organizations'),
  getById: (id: string) => apiRequest(`/api/organizations/${id}`),
};

// Organization Details API
export const organizationDetailsApi = {
  getAll: () => apiRequest('/api/organization-details'),
  getByOrgId: (orgId: string) => apiRequest(`/api/organization-details/${orgId}`),
};

// User Organizations API
export const userOrganizationsApi = {
  getAll: () => apiRequest('/api/user-organizations'),
  getByUserId: (userId: string) => apiRequest(`/api/user-organizations/${userId}`),
};

// Health check
export const healthApi = {
  check: () => apiRequest('/health'),
};