import { ref } from 'vue';
import { apiClient } from '../api/api-client';
import type { User } from '../types/user';

const MOCK_USER: User = {
  id: 1,
  name: 'Ruslan Kilikhin',
  email: 'ruslan@dv-pulse.com',
  role: 'admin',
  isLoggedIn: true,
};

// module-level — shared across all useAuth() calls
const user = ref<User | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

export function useAuth() {
  async function fetchUser(): Promise<void> {
    loading.value = true;
    error.value = null;

    try {
      // TODO: replace with real endpoint when ready
      // const response = await apiClient.get<User>('/login/me');
      // user.value = response.data;

      await apiClient.get('/ping').catch(() => null);
      user.value = MOCK_USER;
    } catch {
      error.value = 'Failed to fetch user';
      user.value = null;
    } finally {
      loading.value = false;
    }
  }

  async function login(email: string, password: string): Promise<void> {
    loading.value = true;
    error.value = null;

    try {
      // TODO: replace with real endpoint when ready
      // const response = await apiClient.post('/login/login', { email, password });
      // user.value = response.data;

      await apiClient.post('/auth/login', { email, password }).catch(() => null);
      user.value = { ...MOCK_USER, isLoggedIn: true };
    } catch {
      error.value = 'Login failed';
    } finally {
      loading.value = false;
    }
  }

  function logout(): void {
    user.value = null;
  }

  return {
    user,
    loading,
    error,
    fetchUser,
    login,
    logout,
  };
}
