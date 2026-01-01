import service from "../services/usersServ.js";

export const createNewUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await service.addNewUser(username, password);
        return res.json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};