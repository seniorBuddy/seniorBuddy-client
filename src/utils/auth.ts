import axios from 'axios';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('/api/auth/login', {
    email,
    password,
  });

  return response.data;
}