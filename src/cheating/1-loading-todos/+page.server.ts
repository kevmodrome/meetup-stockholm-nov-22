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