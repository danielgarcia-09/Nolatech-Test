import ThemeSwitch from "../theme/theme-switch"

const ConfigTheme = () => {

    return (

        <div className="p-4 xl:border-b xl:border-b-black flex items-center gap-4 xl:block">
            <h1 className="text-xl font-semibold">Theme</h1>
            <div className="my-4 w-32" >
                <ThemeSwitch />
            </div>
        </div>
    )

}

export default ConfigTheme