// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    app: {
        // head
        head: {
            title: 'EDU Passport',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'referrer',
                    content: 'no-referrer'
                },
                {
                    name: 'referrer',
                    content: 'strict-origin-when-cross-origin'
                }
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
            script: []

        }
    },
    // build modules
    modules: [
        '@element-plus/nuxt',
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/device',
    ],
    plugins: [
        '~/plugins/fabric.client.js'
    ],
    nitro: {
        devProxy: {}
    },
    runtimeConfig: {
        openaiApiKey: '',
        proxyUrl: ''
    }
})