import { addMessage, login } from "../DAL/messagesDAL.js";

export async function addNewMsg(username, chiperType, encrypted_text) {
    try {
        const res = await addMessage(username, chiperType, encrypted_text)
        if (res) {
            console.log(res, `added successful`);
            return res
        }
    } catch (error) {
        console.error(error)
    }
}

export async function loginUsernamePass( username) {
    try {
        const res = await login( username)
        console.log(`userServ res: ${res}`);
        if (res) {
            console.log(`${username} exists`);
            return res
        }
    } catch (error) {
        console.error(error)
    }
}

export async function encryptMsg(message) {
    const splitMsg = message.split("").reverse()
    return splitMsg
}
export async function unencryptedMsg(message) {
    const reverse = message.toReversed().toString()
    return reverse
}


