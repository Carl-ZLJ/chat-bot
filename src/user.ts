import readlineSync from "readline-sync"
import colors from "colors"
import { addUserMessage } from "./message.js"

export function userQuestion() {

    const question = readlineSync.question(colors.bgCyan(colors.blue("You")) + ": ")

    addUserMessage(question)

    return question
}

export function checkInput(input: string) {
    if (input.trim().toLocaleLowerCase() === 'exit') process.exit(0)
}