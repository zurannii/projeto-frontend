import { create } from 'zustand';

export const useThemeStore = create((set, get) => ({
    theme: 'light',
    toggleTheme:() => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'Light' ? 'dark' : 'Light';
        document.documentElement.setAttribute('data-theme', newTheme);
        set({ theme: newTheme});
    },
}));
 