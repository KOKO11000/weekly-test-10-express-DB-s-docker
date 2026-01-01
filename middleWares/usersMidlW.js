export async function validateUsernameAndPAss(req, res, next) {
    try {
        const { username, password } = req.body
        const user = await service.loginUsernamePass(username, password)
        if (user) {
            next()
        } else {
            return res.status(404)
        }
    } catch (error) {

    }
}