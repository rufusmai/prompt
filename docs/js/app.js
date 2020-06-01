if (process.env.NODE_ENV !== 'production') {
    import('./dev.js')
} else {
    const getUrlByTheme = theme => theme === 'light' ? '/dist/prompt.min.css' : '/dist/prompt_dark.min.css'

    const link = document.createElement('link')
    var theme = localStorage.getItem('theme') != null
        ? (
            localStorage.getItem('theme') === 'light'
                ? 'light'
                : 'dark'
        )
        : (
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        )
    link.href = getUrlByTheme(theme)
    link.rel = "stylesheet"

    document.getElementsByTagName('head')[0].appendChild(link);
    localStorage.setItem('theme', theme)

    document.addEventListener('toggletheme', () => {
        theme = theme === 'light' ? 'dark' : 'light'
        link.setAttribute('href', getUrlByTheme(theme))
        localStorage.setItem('theme', theme)
    })
}
