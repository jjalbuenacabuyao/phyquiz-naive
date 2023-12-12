export const useThemeStore = defineStore('auth', () => {
// Get dark mode preference from localStorage

  const darkMode = ref(localStorage.getItem('darkMode') === 'true')

  return {
    darkMode,
  }
})
