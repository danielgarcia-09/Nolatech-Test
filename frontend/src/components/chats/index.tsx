import chatProvider from "@/providers/chat/chat.provider";
import { setChats, setSelectedChat } from "@/redux/slices/chat/chat.slice";
import { RootState } from "@/redux/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";

const Chats = () => {

    const chats = useSelector((state: RootState) => state.chat.chats);
    const dispatch = useDispatch();

    const getChats = () => {
        chatProvider.getChats().then((res) => {
            dispatch(setChats(res.data))
        }).catch((err) => {
            console.log(err);
            dispatch(setChats([]))
        })
    }

    useEffect(() => {
        getChats();
    }, [])

    return (

        <div className="w-full min-h-screen h-full lg:min-h-[0] lg:h-[785px] pt-26 pl-1 pr-4 flex flex-col gap-3  lg:overflow-y-scroll">
            {chats.map((chat) => <ChatMessage key={chat.chatId} select={id => dispatch(setSelectedChat({ id }))} {...chat} />)}
        </div>
    )
}

export default Chats