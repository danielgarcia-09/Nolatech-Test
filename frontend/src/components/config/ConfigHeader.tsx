import { setConfigInfo } from "@/redux/slices/config/config.slice";
import { RootState } from "@/redux/store/store";
import { ArrowLeftIcon, EllipsisVerticalIcon, PencilSquareIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

const ConfigHeader = () => {

    const user = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <header className="fixed top-0 p-6 w-full flex items-center justify-between gap-3">
            <div className="flex items-center gap-10  sm:gap-20">
                <ArrowLeftIcon
                    className="w-8 h-8 dark:hover:text-emerald-500 hover:cursor-pointer"
                    onClick={() => router.back()}
                />

                <div className="flex items-center gap-3  dark:hover:text-emerald-500">
                    <PencilSquareIcon className="w-8 h-8" />
                    <h1 className="text-2xl font-semibold">Edit Profile</h1>
                </div>
            </div>

            <div className="flex items-center">
                <button
                    type="button"
                    className="w-20 h-12 text-white bg-emerald-500 rounded-full hover:bg-emerald-600"
                    onClick={() => dispatch(setConfigInfo({ ...user, save: true }))}
                >
                    Save
                </button>
                <EllipsisVerticalIcon className="w-8 h-8" />
            </div>
        </header>
    )

}

export default ConfigHeader