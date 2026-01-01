import { connect } from "../data/mongoDB.js"
import { ObjectId } from "mongodb";

const collectionName = "users collection"
async function creatData(dataName) {
    try {
        const db = await connect()
        const result = await db.createCollection(dataName)
        console.log(`create ${dataName} collection!`);
        return result
    } catch (error) {
        console.error(error)
    }
}
export async function insertUser(DB, data = {}) {
    try {
        const db = await connect()
        const result = await db.collection(DB).insertOne(data)
        console.log(result, ` added successful`);
        return result
    } catch (error) {
        console.error(error)
    }
}
