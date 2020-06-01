import lightTheme from '../../scss/prompt.scss'
import darkTheme from '../../scss/prompt_dark.scss'

var theme = localStorage.getItem('theme') != null ? (localStorage.getItem('theme') === 'light' ? lightTheme : darkTheme) : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme)
theme.use()
localStorage.setItem('theme', (theme === lightTheme) ? 'light' : 'dark')

document.addEventListener('toggletheme', () => {
    theme.unuse()

    theme = (theme === lightTheme) ? darkTheme : lightTheme
    localStorage.setItem('theme', (theme === lightTheme) ? 'light' : 'dark')
    theme.use()
})
