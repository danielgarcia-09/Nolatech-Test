import { convertToHours, convertToUSDate } from "@/helpers/dates/date";
import { ChatI } from "@/interfaces/chat/chat.interface";

interface ChatMessageProps extends ChatI {
    select: (id: number) => void
}

const ChatMessage = (props: ChatMessageProps) => {
    return (
        <div onClick={() => props.select(props.chatId)} className="cursor-pointer border-solid border border-black p-5 flex items-center gap-3">
            <img 
                src={`https://ui-avatars.com/api/?name=${props.destinatary}&background=random`}                
                alt={`random-${props.chatId}`} 
                className="rounded-full w-10 h-10"
            />
            <h1 className="font-bold">{props.destinatary}</h1>

            <div className="w-full h-full flex flex-col justify-start items-end gap-2 ">
                <p className="text-sm">{convertToUSDate(props.lastMessage)}</p>
                <span className="text-sm">{convertToHours(props.lastMessage)}</span>
            </div>
        </div>
    )
}

export default ChatMessage