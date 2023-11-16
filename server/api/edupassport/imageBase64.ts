import imageType from 'image-type';

export default defineEventHandler(async (event) => {
    try {

        const query = await getQuery(event)
        const res = await $fetch(query.url, {
                responseType: 'arrayBuffer',
                method: 'GET'
            })

        // 确定图片格式
        const type = await imageType(res);

        // 检查是否成功识别了图片格式
        if (!type) {
            throw new Error('Unable to determine image type');
        }

        // 将 ArrayBuffer 转换为 Base64
        const base64Image = Buffer.from(res).toString('base64');

        // 构建完整的 Base64 图片数据 URI
        const imageDataUri = `data:${type.mime};base64,${base64Image}`;

        // 创建一个包含完整 Base64 图片数据 URI 的 Response 对象
        return new Response(imageDataUri, {
            status: 200, // HTTP 状态码
            statusText: 'OK',
            headers: {
                'Content-Type': 'text/plain', // 返回的是文本
            },
        });

    } catch (e) {
        return {
            code: 500,
            data: [],
            msg: e
        }
    }
})