import { jsonToUser } from '$lib/data.js'
import { error } from '@sveltejs/kit'

export async function load({ fetch, params, cookies }) {
    const response = await fetch(`https://api.github.com/users/${params.login}`);
    const json = await response.json();
    const user = jsonToUser(json);

    let history = cookies.get('last_visited');
    
    if (history === undefined) {
        cookies.set('last_visited', params.login, { path: '/' })
    }
    else {
        cookies.set('last_visited', history + ',' + params.login, { path: '/' })
    }

    history = cookies.get('last_visited');

    if (!user) throw error(404);
    return { user, history };
}

export const actions = {
    delete: async ({ cookies }) => {
        cookies.delete('last_visited', { path: '/' })
    }
}