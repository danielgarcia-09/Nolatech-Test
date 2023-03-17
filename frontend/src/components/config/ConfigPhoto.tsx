import configProvider from "@/providers/config/config.provider";
import { setConfigInfo } from "@/redux/slices/config/config.slice";
import { RootState } from "@/redux/store/store";
import { CameraIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";

const ConfigPhoto = () => {

    const user = useSelector((state: RootState) => state.config);
    const dispatch = useDispatch();

    const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if(!file) return;
            

            if(!file.type.includes("image")) {
                alert("Not a valid image file")
                return;
            } 
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const data = {
                    ...user,
                    photo: reader.result as string,
                };
                configProvider.uploadConfig(data).then(res => {
                    dispatch(setConfigInfo(data))
                }).catch(err => {
                    console.log(err)
                })
            }


        }
    }

    return (
        <div className="flex items-center justify-center w-full h-[220px] pb-24 border-b border-b-black xl:pb-0 xl:border-b-0 xl:border-b-transparent">
            <div className="border border-black dark:border-emerald-400 rounded-full w-44 h-44 flex items-center justify-center relative">
                <img
                    alt="user photo"
                    src={`${user.photo || `https://ui-avatars.com/api/?name=${user.username || "John Doe"}&background=random`}`}
                    className="rounded-full w-40 h-40 block m-0"
                />

                <div className="w-10 h-10 z-10 text-black dark:text-slate-300 absolute -bottom-5">
                    <label htmlFor="file-input">
                        <CameraIcon className="cursor-pointer hover:text-emerald-400" />
                    </label>
                    <input id="file-input" type="file" className="hidden" onChange={handlePhoto} />
                </div>

            </div>
        </div>
    )
}

export default ConfigPhoto