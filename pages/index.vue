<script setup>


const route = useRoute()

useHead({
  title: route.query.title ?? 'EDU Passport',
  meta: [
    {
      name: 'description',
      content: route.query.description
    },
    {
      property: 'og:title',
      content: route.query.title
    },
    {
      property: 'og:description',
      content: route.query.description
    },
    {
      property: 'og:url',
      content: route.query.url
    },
    {
      property: 'og:image',
      content: route.query.image
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: route.query.url
    },
    {rel: 'icon', type: 'image/x-icon', href: '/favicon-edu.ico'}
  ]
})

const initLoading = ref(false)

onMounted(() => {
  initLoading.value = true
  if (route.query.url) {
    setTimeout(() => {
      window.location.href = route.query.url
    }, 1000)
    setTimeout(() => {
      initLoading.value = false
    }, 1000)
  }
  setTimeout(() => {
    initLoading.value = false
  }, 1000)
})
</script>

<template>
  <div class="h-screen" v-loading="initLoading"></div>
</template>

<style scoped>

</style>