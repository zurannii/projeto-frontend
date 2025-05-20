'use client';
import { useThemeStore } from '../store/themeStore';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme} className="button">
      Mudar para tema {theme === 'light' ? 'escuro' : 'claro'}
    </button>
  );
}
