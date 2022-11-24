import { API_URL } from '$env/static/private'
import type { PageServerLoad } from './$types'
import type { Actions } from '@sveltejs/kit'

const baseUrl = `${API_URL}/collections/todos/records`

export const load: PageServerLoad = async ({ fetch }) => {
    const res = await fetch(baseUrl)
    const data = await res.json()
    
    return {
        todos: data.items
    }
}   

export const actions: Actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const text = data.get('text')
        const res = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-type': 'application/json',
            },
        })

        return { success: true };
    },
}