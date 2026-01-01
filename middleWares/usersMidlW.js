import { loginUsernamePass } from "../services/messageSrv.js"
export async function validateUsername(req, res, next) {
    try {
        const { username } = req.headers
        const user = await loginUsernamePass(username)
        if (user) {
            next()

        } else {
            return res.status(404)
        }
    } catch (error) {

    }
}