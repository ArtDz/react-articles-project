import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Theme } from '../../const/theme'

interface UseThemeResult {
    toggleTheme: (saveAction: (theme: Theme) => void) => void
    theme: Theme
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    // useEffect(() => {
    //     document.body.className = theme || ''
    // }, [theme])

    const toggleTheme = (saveAction: (theme: Theme) => void) => {
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
        // document.body.className = newTheme
        saveAction?.(newTheme)
    }

    return {
        theme: theme || Theme.DARK,
        toggleTheme,
    }
}
