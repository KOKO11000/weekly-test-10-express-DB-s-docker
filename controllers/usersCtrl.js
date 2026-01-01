import { insertUser } from "../mongoCRUD/crud.js";


const collectionName = "users collection"


export const addUserToCollection = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await insertUser(collectionName, { username, password });
        console.log(newUser);
        return res.status(201).json([{ username: username, id: newUser.insertedId }]);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }

};