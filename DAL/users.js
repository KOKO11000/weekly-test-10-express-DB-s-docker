import supabase from "../data/sopabase.js";
const nameDB = "users"


export async function getAllusers() {
    const { data, error } = await supabase
        .from(nameDB)
        .select("*")
    if (error) throw error
    return data
}
export async function getUserById(id) {
    const { data, error } = await supabase
        .from(nameDB)
        .select("*")
        .eq("id", id)
        .single()
    if (error) throw error
    return data
}
export async function login(username, password) {
    const { data, error } = await supabase
        .from(nameDB)
        .select("*")
        .eq("username", username)
        .eq("password", password)
        .single()
    if (error) throw error
    return data
}
export async function addUser(username, password) {
    const { data, error } = await supabase
        .from(nameDB)
        .insert([{ username, password }])
        .select("id")
        .single()
    if (error) throw error
    return data
}
export async function updateUser(id, username, password) {
    const { data, error } = await supabase
        .from(nameDB)
        .update({ username, password })
        .eq("id", id)
        .select("*")
        .single()
    if (error) throw error
    return data
}
export async function deleteUserById(id) {
    const { data, error } = await supabase
        .from(nameDB)
        .delete()
        .eq("id", id)
        .select()
        .single()
    if (error) throw error
    return data
}
