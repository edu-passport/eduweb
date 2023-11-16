export default defineNuxtRouteMiddleware(async (to, from) => {

    const token = useCookie('token')

    const isVer = await $fetch('/api/admin/verify',{
        method:"post",
        body:{token:token.value}
    })

    if (!isVer) {
        return navigateTo('/admin/login')
    }

})