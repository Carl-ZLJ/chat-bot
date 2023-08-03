import ora, { Ora } from "ora"

let spinner: Ora
export function startLoading() {

    spinner = ora('Bot is thinking...\n').start()
}

export function stopLoading() {
    spinner.stop()
}