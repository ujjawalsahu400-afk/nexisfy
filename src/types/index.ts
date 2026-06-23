export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
  role: 'student' | 'premium' | 'admin';
  xp: number;
  coins: number;
  level: number;
  streak: number;
  subscription: 'free' | 'premium';
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface ThemeState {
  mode: 'light' | 'dark';
}
