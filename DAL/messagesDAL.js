import supabase from "../data/sopabase.js";
const dataName = "messages"
export async function addMessage(username,chiperType,encrypted_text) {
    const { data, error } = await supabase
    .from(dataName)
    .insert([{username,chiperType,encrypted_text,}])
    .select("id")
    .single()
    if (error) throw error
    return data
};

export async function login(username) {
    const { data, error } = await supabase
    .from(dataName)
    .select("*")
    // .eq('password',password)
    .eq("username",username)
    // .single() 
    if (error) throw error
    return data
};