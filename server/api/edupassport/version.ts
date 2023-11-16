export default defineEventHandler(async (event) => {
    try{

        return {
            code:200,
            data:{
                version:"3.0.0"
            },
            msg:'success'
        }

    }catch (e) {
        console.log(e)
        return {
            code:500,
            data:[],
            msg:e
        }
    }
})