import * as farosClient from './clientFaros'

export async function registerUser() {
    return farosClient.default.register()
}
