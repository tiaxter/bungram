import {Ret, Opts} from "typegram";
import {req} from "./utils";

export class Bungram {
    private readonly TOKEN;
    private readonly ENDPOINT;

    constructor(token: string) {
        this.TOKEN = token;
        this.ENDPOINT = `https://api.telegram.org/bot${this.TOKEN}`;
    }

    public getMe() : Promise<Ret<'getMe'>> {
        return req(`${this.ENDPOINT}/getMe`);
    }
}