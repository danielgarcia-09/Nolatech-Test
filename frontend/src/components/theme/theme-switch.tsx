import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const ThemeSwitch = () => {

    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;

    const [checked, setChecked] = useState(false)
    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme)
        setChecked(!checked)
    }

    useEffect(() => {
        setChecked(currentTheme === 'dark')
    }, [])

    return (
        <div className="flex items-center gap-2 justify-center">
            <SunIcon className="h-6 w-6 text-yellow-400" />
            <div>
                <label className="switch">
                    <input
                        checked={checked}
                        type="checkbox"
                        onChange={() => toggleTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
            <MoonIcon className="h-6 w-6 text-yellow-400" />
        </div>
    )
}

export default ThemeSwitch