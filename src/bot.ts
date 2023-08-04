import { Configuration, OpenAIApi } from "openai"
import { Message, addAssistantMessage, messages } from "./message.js"
import { SmartAPI } from "./SmartAPI.js"

type Api =
    | OpenAIApi

export class ApiV1 extends SmartAPI {
    api: Api
    chat: any
    constructor() {
        super()
        this.api = new OpenAIApi(
            new Configuration({
                basePath: "https://api.chatanywhere.cn/v1",
                apiKey: process.env.OPENAI_API_KEY,
            })
        )
    }

    async createChat() {
        this.chat = await this.api.createChatCompletion(
            {
                model: "gpt-3.5-turbo",
                messages,
            },
        )
    }

    chatResponse() {
        const { content, role } = this.chat.data.choices[0].message!

        return {
            role,
            content,
        } as Message
    }

}
export async function botAnswer(api: SmartAPI) {
    await api.createChat()
    const { content, role } = api.chatResponse()

    addAssistantMessage(content!)

    return {
        role,
        content,
    }
}