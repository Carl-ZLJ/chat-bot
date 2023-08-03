export interface Message {
    role: 'user' | "assistant",
    content: string
}

export const messages: Message[] = []

export function addUserMessage(userInput: string) {
    messages.push({
        role: "user",
        content: userInput,
    })
}

export function addAssistantMessage(answer: string) {
    messages.push({
        role: "assistant",
        content: answer,
    })
}