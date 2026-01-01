import { addUser } from "../DAL/users.js";

async function addNewUser(username,password) {
    try {
        const res = await addUser(username,password)
        if (res) {
            console.log(`user added successfully`);
            return res
        }
    } catch (error) {
        console.error(error)
    }
}

export default {
    addNewUser
}