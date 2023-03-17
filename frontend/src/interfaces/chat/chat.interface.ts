export interface ChatI {
    chatId: number;
    destinataryId: string;
    destinatary: string;
    lastMessage: string;
}

export interface ChatSliceI {
    chats: ChatI[];
    selectedChat: number | null;
}