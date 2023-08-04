import { Message } from "./message.js";

export abstract class SmartAPI {
    abstract createChat(): void;
    abstract chatResponse(): Message;
}
