import configProvider from "@/providers/config/config.provider";
import { setConfigInfo } from "@/redux/slices/config/config.slice";
import { RootState } from "@/redux/store/store";
import { PencilIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const ConfigEdit = () => {

    const user = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();
    
    const [toggleInput, setToggleInput] = useState(false)
    const [username, setUsername] = useState(user.username || "")
    

    const handleChange = (value: string) => {
        
        if(!value) {
            alert("Please enter a valid username")
            return;
        } 
        const data = { ...user, username: value, save: false }; 
        
        configProvider.uploadConfig(data).then(() => {
            dispatch(setConfigInfo(data))
        }).catch(err => {
            console.log(err)
            alert("Something went wrong, please try again later")
        }).finally(() => setToggleInput(false))
    }

    const handlePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleChange(e.currentTarget.value)
        }
    }

    useEffect(() => {
        if(user.save && toggleInput && username) {
            handleChange(username)
        }
    }, [user.save])

    return (
        <div className="p-4 h-[8rem] border-b border-b-black xl:flex xl:flex-col xl:justify-center xl:items-center">
            <div className="flex items-center gap-1 my-2">
                <h1 className="text-xl font-semibold">User Name</h1>
                <PencilIcon
                    onClick={() => setToggleInput(!toggleInput)}
                    className="w-5 h-5 hover:cursor-pointer hover:text-emerald-400 dark:hover:text-emerald-400  dark:text-slate-300"
                />
            </div>

            <div className="p-2">
                {!toggleInput ? (
                    <h1 className="text-md font-semibold">{user.username}</h1>
                ) : (
                    <input
                        type="text"
                        className="w-full h-10 p-2 dark:outline-none border border-black focus:border-emerald-700  dark:focus:border-emerald-400 dark:border-emerald-700 rounded-md"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={handlePress}
                        placeholder="Enter your new username"
                    />
                )}
            </div>
        </div>
    )
}

export default ConfigEdit