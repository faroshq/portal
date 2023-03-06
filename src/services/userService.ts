import client from './client'

export async function registerUser() {
    return client.register()
}
