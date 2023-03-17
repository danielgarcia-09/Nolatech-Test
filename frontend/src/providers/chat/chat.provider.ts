import { BaseProvider } from "@/helpers/axios/axios";
import { ChatI } from "@/interfaces/chat/chat.interface";

class ChatProvider extends BaseProvider {
    constructor() {
        super("/chats");
    }

    public async getChats() {
        return await this.get<ChatI[]>("");
    }
} 

const chatProvider = new ChatProvider();
export default chatProvider