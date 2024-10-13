import { createSignal, createEffect } from 'solid-js'
import { TbSun, TbMoon } from 'solid-icons/tb'

export const ThemeToggle = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
    ).matches
    const [darkMode, setDarkMode] = createSignal(prefersDarkMode)

    createEffect(() => {
        if (darkMode()) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })

    return (
        <button
            type="button"
            onClick={() => setDarkMode(!darkMode())}
            class={`flex h-6 w-12 items-center rounded-full pl-1 transition-colors duration-200 ease-in-out focus:outline-none dark:bg-gray-600 ${darkMode() ? 'bg-gray-800' : 'bg-gray-200'}`}
        >
            <div
                class={`${
                    darkMode()
                        ? 'translate-x-6 bg-gray-300'
                        : 'translate-x-0 bg-white'
                } flex h-4 w-4 transform items-center justify-center rounded-full transition-transform duration-200 ease-in-out`}
            >
                {darkMode() ? (
                    <TbMoon class="absolute h-3 w-3 text-gray-800" />
                ) : (
                    <TbSun class="absolute h-3 w-3 text-yellow-500" />
                )}
            </div>
        </button>
    )
}
