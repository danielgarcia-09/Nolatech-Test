import configProvider from "@/providers/config/config.provider";
import { setConfigInfo } from "@/redux/slices/config/config.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ConfigEdit from "./ConfigEdit";
import ConfigPhoto from "./ConfigPhoto";
import ConfigTheme from "./ConfigTheme";

const ConfigIndex = () => {

    const dispatch = useDispatch(); 

    const getUserInfo = () => {
        configProvider.getConfig().then(res => {
            dispatch(setConfigInfo(res.data))
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <div className="pt-24 md:px-10 flex flex-col gap-3">
            <ConfigPhoto/>
            <ConfigEdit/>
            <ConfigTheme />
        </div>
    );
    
}

export default ConfigIndex;