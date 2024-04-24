import { jsonToUser } from '$lib/data.js';

export async function load() {
    const response = await fetch('https://api.github.com/users');
    const json = await response.json();
    
    return { users: json.map((jsonToUser) => ({
        id: jsonToUser.id,
        login: jsonToUser.login
    }))}
}
