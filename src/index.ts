import dotenv from "dotenv"
import { Configuration, OpenAIApi } from "openai"
import colors from "colors"
import { checkInput, userQuestion } from "./user.js"
import { ApiV1, botAnswer } from "./bot.js"
import { startLoading, stopLoading } from "./loading.js"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

function init() {
    dotenv.config({
        path: resolve(dirname(fileURLToPath(import.meta.url)), "../.env")
    })

    const api = new ApiV1()

    return api
}

async function __main() {
    const api = init()

    while (true) {
        const question = userQuestion()

        checkInput(question)

        startLoading()

        const { role, content } = await botAnswer(api)

        stopLoading()

        console.log(`\n${colors.bgBlue(colors.yellow(role))}: ${content}\n`)
    }
}

__main()