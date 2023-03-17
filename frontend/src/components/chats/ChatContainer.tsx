import { convertToHours } from "@/helpers/dates/date";
import { ChatI } from "@/interfaces/chat/chat.interface"
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ChatContainer = () => {

    const [choiceChat, setChoiceChat] = useState<ChatI>()

    const { chats, selectedChat } = useSelector((state: RootState) => state.chat);

    const messages = [
        { message: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", date: "2021-09-02T12:00:00.000Z", isMine: false },
        { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.", date: "2021-09-01T12:00:00.000Z", isMine: true },
    ]

    useEffect(() => {
        if (!selectedChat || !chats) return;
        const chat = chats.find((chat) => {
            return chat.chatId === selectedChat
        })
        setChoiceChat(chat)
    }, [chats, selectedChat])

    return (
        <div className="flex lg:h-[965px] h-full flex-col gap-3">

            <div className="flex items-center gap-2 p-8 border-b border-b-black">
                <img
                    src={`https://ui-avatars.com/api/?name=${choiceChat?.destinatary || "John Doe"}&background=random`}
                    alt={`random-${choiceChat?.chatId || "123"}`}
                    className="rounded-full w-10 h-10"
                />
                <h1>{choiceChat?.destinatary}</h1>
            </div>


            <div className="flex flex-col gap-5 p-4 h-2/4 lg:h-[730px] overflow-y-scroll">
                {messages.map((message, index) => (
                    <div key={index} className={`${message.isMine ? "self-end message sent" : "self-start message received"} flex gap-2 h-[125px] w-[255px] p-4 bg-gray-100 dark:bg-black items-center`}>
                        <div className={`h-full flex flex-col items-end justify-center gap-2`}>
                            <p className="w-full h-full text-sm">{message.message}</p>
                            <p className="text-xs text-gray-500">{convertToHours(message.date)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center mt-3 px-6">
                <input type="text" placeholder="Write a message here" className="w-full h-12 p-4 border border-gray-300 rounded-md" />

            </div>
        </div>
    )
}

export default ChatContainer