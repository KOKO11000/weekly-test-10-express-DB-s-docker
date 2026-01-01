import { addNewMsg, encryptMsg } from "../services/messageSrv";

export const addToSupabase = async (req, res) => {
    try {
        const { username } = req.headers;
        const { message, chiperType } = req.body;
        const encrypt = await encryptMsg(message);
        const addMsg = await addNewMsg(username, chiperType, encrypt);
        res.json(addMsg);
    } catch (error) {
        res.status(500).json(error.message);
        console.error(error);
    }

};