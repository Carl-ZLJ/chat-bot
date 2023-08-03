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
    limitMessageLength()
}

export function addAssistantMessage(answer: string) {
    messages.push({
        role: "assistant",
        content: answer,
    })
    limitMessageLength()
}

// create a function to limit the length of message to five
export function limitMessageLength() {
    if (messages.length > 5) {
        messages.shift()
    }
}
