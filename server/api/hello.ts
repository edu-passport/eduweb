import {Users} from '~/models/users';

export default defineEventHandler(async (event) => {
    const users = await Users.findAll();
    return  users
})