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

    public forwardMessage(params: Opts<'forwardMessage'>) : Promise<Ret<'forwardMessage'>> {
       return req(`${this.ENDPOINT}/forwardMessage`, params);
    }

    public copyMessage(params: Opts<'copyMessage'>) : Promise<Ret<'copyMessage'>> {
        return req(`${this.ENDPOINT}/copyMessage`, params);
    }

    // TODO: must implement methods: sendPhoto, sendAudio, sendDocument, sendVideo, sendAnimation,
    //                               sendVoice, sendVideoNote, sendMediaGroup

    public sendLocation(params: Opts<'sendLocation'>) : Promise<Ret<'sendLocation'>> {
        return req(`${this.ENDPOINT}/sendLocation`, params);
    }
}