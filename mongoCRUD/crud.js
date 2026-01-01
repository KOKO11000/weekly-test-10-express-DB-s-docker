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

export async function getAll(DB,_id) {
    try {
        const db = await connect()
        const result = await db.collection(DB).find({_id:new ObjectId(_id)}).toArray() // return all data
        console.log(`${result} SUCCESS!`);
        return result
    } catch (error) {
        console.error(error)
    }
}