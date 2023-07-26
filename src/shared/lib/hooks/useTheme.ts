import { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Theme } from '../../const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localStorage'

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        document.body.className =
            localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || ''
    }, [])

    const toggleTheme = () => {
        let newTheme: Theme
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.NEW
                break
            case Theme.NEW:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme)
        document.body.className = newTheme
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme || Theme.DARK,
        toggleTheme,
    }
}
