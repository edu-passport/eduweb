<template>
  <div class="  flex flex-row items-center justify-between top-0 bg-slate-200/50 px-[120px] py-[10px] gap-[20px]">
    <div @click="goHome()">
      <h1 class="font-mono text-center text-[22px] font-bold text-orange-600 cursor-pointer">
        AI指南专业版
      </h1>
      <div  class="font-mono text-[12px] text-orange-600 cursor-pointer">aicompasspro.com</div>
    </div>

    <div class="flex flex-wrap flex-col md:flex-row gap-6">
      <nuxt-link class="font-sans text-[14px] hover:text-orange-600 p-[10px] font-semibold"
                 to="/nav" target="_blank">
        导航
      </nuxt-link>
      <nuxt-link class="font-sans text-[14px] hover:text-orange-600  p-[10px]  font-semibold"
                 to="https://www.kkpans.com"  target="_blank">
        夸克网盘资源合集
      </nuxt-link>
      <nuxt-link class="font-sans text-[14px] hover:text-orange-600   p-[10px] font-semibold"
                 to="/study"  >
        <span class="font-mono">English</span>-英语学习小助手
      </nuxt-link>
      <nuxt-link class="font-mono text-[14px] hover:text-orange-600   p-[10px] font-semibold"
                 to="/whatlink"  >
        What's Link
      </nuxt-link>
    </div>

  </div>

</template>

<script setup>
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped>

</style>