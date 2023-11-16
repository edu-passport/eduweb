<template>
  <div class="flex flex-col h-screen items-center justify-center gap-[80px] p-[40px]">
    <div class="text-center">
      <h1 class="font-mono  text-[32px] font-bold text-orange-600 cursor-pointer">
        <nuxt-link to="/">AI指南专业版</nuxt-link>
      </h1>
      <div  class="font-mono text-[14px] text-orange-600 cursor-pointer">aicompasspro.com</div>
    </div>
    <div class=" mx-auto">
      <input-for-search></input-for-search>
    </div>
    <div class="flex flex-row items-center justify-center flex-wrap gap-3 font-mono text-[14px]">
      <nuxt-link to="/nav" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">AI导航</nuxt-link>
      <nuxt-link to="/custom-avatar" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">定制头像</nuxt-link>
      <nuxt-link to="/hotGirl" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">小姐姐视频</nuxt-link>
      <nuxt-link to="/study" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">英语小助手</nuxt-link>
      <nuxt-link to="/yoga" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">瑜伽小助手</nuxt-link>
      <nuxt-link to="/movie" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">影视小助手Beta</nuxt-link>
      <nuxt-link to="/whatlink" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">What's Link</nuxt-link>
      <nuxt-link to="https://kkwnhub.com" target="_blank" class="text-red-600 border border-red-400 py-[4px] px-[10px] rounded-[6px] hover:bg-red-600 hover:text-white">夸克网盘资源</nuxt-link>

    </div>
    <div class="flex flex-row items-center justify-center">
      <clock-default></clock-default>
    </div>

<!--    <div class="flex flex-row gap-3">-->
<!--      <sixty-news></sixty-news>-->
<!--    </div>-->

  </div>

</template>

<script setup>
import InputForSearch from "~/components/customInput/inputForSearch.vue";

definePageMeta({
  layout:'ai-layout'
})
import { ref, onMounted } from 'vue'
const getAllNews = async () => {
  const res = await $fetch('https://daily-hot-api-sage.vercel.app/all')
  console.log(res)
}
const bilibiliNewsData = ref([])
const getBilibiliNews = async () => {
  const res = await $fetch('https://daily-hot-api-sage.vercel.app/bilibili')
  bilibiliNewsData.value = res.data
}

const doubanNewsData = ref([])
const getDoubanNews = async () => {
  const res = await $fetch('https://daily-hot-api-sage.vercel.app/douban_new/new')
  doubanNewsData.value = res.data
}

onMounted(()=>{

})
</script>

<style scoped lang="scss">


</style>