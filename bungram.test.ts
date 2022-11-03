import {test} from "bun:test";
import {Bungram} from "./index";

const bot = new Bungram(process.env.BOT_TOKEN);

test("getMe", async () => {
    await bot.getMe();
});

test("sendMessage", async () => {
    await bot.sendMessage({
        chat_id: process.env.CHAT_ID,
        text: "Hello World!",
    });
});

test("sendLocation", async () => {
    await bot.sendLocation({
        chat_id: process.env.CHAT_ID,
        latitude: 45.464664,
        longitude: 9.188540,
        live_period: 86400,
    });
});

test("editMessageLiveLocation", async () => {
    let response = await bot.sendLocation({
        chat_id: process.env.CHAT_ID,
        latitude: 45.464664,
        longitude: 9.188540,
        live_period: 86400,
    });
    await bot.editMessageLiveLocation({
        chat_id: process.env.CHAT_ID,
        message_id: response.message_id,
        latitude: 35.652832,
        longitude: 139.839478,
    });
});

test("stopMessageLiveLocation", async () => {
    let response = await bot.sendLocation({
        chat_id: process.env.CHAT_ID,
        latitude: 45.464664,
        longitude: 9.188540,
        live_period: 86400,
    });
    await bot.stopMessageLiveLocation({
        chat_id: process.env.CHAT_ID,
        message_id: response.message_id,
    });
});

test("sendVenue", async () => {
    await bot.sendVenue({
        chat_id: process.env.CHAT_ID,
        latitude: 35.652832,
        longitude: 139.839478,
        title: "Tokyo City",
        address: "Tokyo Center"
    });
});

test("sendContact", async () => {
    await bot.sendContact({
        chat_id: process.env.CHAT_ID,
        phone_number: "3XX XXX XXXX",
        first_name: "John Doe",
    });
});

test("sendPoll", async () => {
    await bot.sendPoll({
        chat_id: process.env.CHAT_ID,
        question: "What's your favourite program language?",
        options: ["PHP", "JavaScript", "GoLang", "HTML"],
    });
});

test("sendDice", async () => {
    await bot.sendDice({
        chat_id: process.env.CHAT_ID,
    });
});

test("sendChatAction", async () => {
    await bot.sendChatAction({
        chat_id: process.env.CHAT_ID,
        action: "typing",
    });
});

test("getUserProfilePhotos", async () => {
    await bot.getUserProfilePhotos({
        user_id: parseInt(process.env.USER_ID),
    });
});

/*
test("banChatMember", async () => {
    await bot.banChatMember({
        chat_id: process.env.GROUP_ID,
        user_id: parseInt(process.env.BANNABLE_USER_ID),
    });
});

test("unbanChatMember", async () => {
    await bot.unbanChatMember({
        chat_id: process.env.GROUP_ID,
        user_id: parseInt(process.env.BANNABLE_USER_ID),
    });
});
*/

test("restrictChatMember", async () => {
    await bot.restrictChatMember({
        chat_id: process.env.GROUP_ID,
        user_id: parseInt(process.env.BANNABLE_USER_ID),
        permissions: {
            can_pin_messages: false,
        },
    });
});

test("promoteChatMember", async () => {
    await bot.promoteChatMember({
        chat_id: process.env.GROUP_ID,
        user_id: parseInt(process.env.BANNABLE_USER_ID),
        can_pin_messages: true,
    });
});

test("setChatAdministratorCustomTitle", async () => {
    await bot.setChatAdministratorCustomTitle({
        chat_id: process.env.GROUP_ID,
        user_id: parseInt(process.env.BANNABLE_USER_ID),
        custom_title: "Sviluppino Typescript",
    });
});
