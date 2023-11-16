export default defineEventHandler(async (event) => {
    try {

        const query = await getQuery(event)
        const res =
            await $fetch(query.url, {
                responseType: 'arrayBuffer',
                method: 'GET'
            })

        return new Response(res, {
            status: 200, // HTTP 状态码
            statusText: 'OK',
        });

    } catch (e) {
        return {
            code: 500,
            data: [],
            msg: e
        }
    }
})