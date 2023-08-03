import type { OpenAIApi } from "openai"
import { addAssistantMessage, messages } from "./message.js"

type Api =
    | OpenAIApi

export async function botAnswer(openai: Api) {
    const chat = await openai.createChatCompletion(
        {
            model: "gpt-3.5-turbo",
            messages,
        },
    )
    const { content, role } = chat.data.choices[0].message!

    addAssistantMessage(content!)

    return {
        role,
        content,
    }
}