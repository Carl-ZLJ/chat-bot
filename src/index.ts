import dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import colors from "colors"
import { checkInput, userQuestion } from "./user.js"
import { botAnswer } from "./bot.js"
import { startLoading, stopLoading } from "./loading.js"

function init() {
    dotenv.config()
    const openai = new OpenAIApi(
        new Configuration({
            basePath: "https://api.chatanywhere.cn/v1",
            apiKey: process.env.OPENAI_API_KEY,
        })
    )

    return {
        openai,
    }

}

async function __main() {
    const { openai } = init()

    while (true) {
        const question = userQuestion()

        checkInput(question)

        startLoading()

        const { role, content } = await botAnswer(openai)

        stopLoading()

        console.log(`\n${colors.bgBlue(colors.yellow(role))}: ${content}\n`)
    }
}

__main()