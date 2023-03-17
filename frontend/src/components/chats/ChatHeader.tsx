import configProvider from "@/providers/config/config.provider";
import { setConfigInfo } from "@/redux/slices/config/config.slice";
import { RootState } from "@/redux/store/store";
import { EllipsisVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatHeader = () => {

    const user = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();

    const router = useRouter()

    const getUserConfig = () => {
        configProvider.getConfig().then((res) => {
            dispatch(setConfigInfo(res.data))
        }).catch((err) => {
            console.log(err);
            dispatch(setConfigInfo({
                username: "John Doe",
                photo: "https://ui-avatars.com/api/?name=John+Doe&background=random"
            }))
        })
    }

    useEffect(() => {
        getUserConfig();
    }, [])

    return (
        <header className="bg-white dark:bg-slate-800 border-b-4 border-b-black dark:border-b-blue-700 top-0 w-full p-4" >
            <div className="flex items-center justify-between">
                <div
                    className="flex items-center gap-3 hover:cursor-pointer hover:bg-emerald-400 py-3 px-6 rounded-full"
                    onClick={() => router.push("/config")}
                >
                    <img
                        src={user.photo || `https://ui-avatars.com/api/?name=${user.username}&background=random`}
                        className="rounded-full w-14 h-14"
                    />
                    <h1 className="text-lg font-semibold">{user.username}</h1>
                </div>

                <EllipsisVerticalIcon className="w-11 h-11 hover:cursor-pointer hover:text-emerald-400" onClick={() => router.push("/config")} />
            </div>


            <div className="px-16 my-2 lg:px-6">
                <div className="flex items-center gap-1 px-3 bg-gray-100 dark:bg-slate-700 focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-3 rounded-md bg-gray-100 dark:bg-slate-700 focus:outline-none "
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 dark:text-gray-300 cursor-pointer hover:text-emerald-400  dark:hover:text-emerald-400" />
                </div>
            </div>
        </header>
    )
}

export default ChatHeader