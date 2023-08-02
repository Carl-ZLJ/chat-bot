import { Configuration, OpenAIApi } from "openai"
import dotenv from "dotenv"
import readlineSync from "readline-sync"

dotenv.config()


const openai = new OpenAIApi(
    new Configuration({
        basePath: "https://api.chatanywhere.cn/v1",
        apiKey: process.env.OPENAI_API_KEY,
    })
)

void (async () => {
    while (true) {
        const userInput = readlineSync.question("You: ")
        const chat = await openai.createChatCompletion(
            {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        "role": "user",
                        "content": userInput,
                    }
                ]
            },
        )
        const { content, role } = chat.data.choices[0].message!
        console.log(`${role}: ${content}`)
    }
})()