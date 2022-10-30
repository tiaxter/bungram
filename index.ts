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

    public logOut() : Promise<Ret<'logOut'>> {
       return req(`${this.ENDPOINT}/logOut`);
    }
    
    public close() : Promise<Ret<'close'>> {
        return req(`${this.ENDPOINT}/close`);
    }

    public sendMessage(params: Opts<'sendMessage'>) : Promise<Ret<'sendMessage'>> {
       return req(`${this.ENDPOINT}/sendMessage`, params);
    }
}