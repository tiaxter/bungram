import {Ret, Opts, Telegram} from "typegram";
import {req} from "./utils";

type Method = keyof Telegram;

const availableMethods: Method[] = [
    'getMe',
    'sendMessage',
    'sendLocation',
    'editMessageLiveLocation',
    'stopMessageLiveLocation',
];

type HasMethods = { [k in typeof availableMethods[number]]: (params?: Opts<k>) => Promise<Ret<k>> }

export const Bungram = class Bungram {
    private readonly TOKEN;
    private readonly ENDPOINT;

    constructor(token: string) {
        this.TOKEN = token;
        this.ENDPOINT = `https://api.telegram.org/bot${this.TOKEN}`;

        availableMethods.forEach(method => {
            this[method] = (params: Opts<typeof method>): Promise<Ret<typeof method>> => {
                return req(`${this.ENDPOINT}/${method}`, params);
            };
        });
    }
} as unknown as { new(token: string): HasMethods };