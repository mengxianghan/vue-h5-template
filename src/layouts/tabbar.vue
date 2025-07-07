<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface IMenu {
  label: string
  icon: string
  to: RouteLocationRaw
  name: string
}

const menus = ref<IMenu[]>([
  { label: '首页', name: 'Home', to: { name: 'Home' }, icon: 'wap-home-o' },
  { label: '我的', name: 'User', to: { name: 'User' }, icon: 'contact-o' },
])
const active = ref<string>(route?.name as string)

function onTabBarChange(name: string) {
  const to = menus.value.find(item => item.name === name)?.to as RouteLocationRaw
  router.push(to)
}
</script>

<template>
  <div>
    <router-view />

    <van-tabbar
      v-model="active"
      placeholder
      @change="onTabBarChange"
    >
      <van-tabbar-item
        v-for="(item, index) in menus"
        :key="index"
        :icon="item.icon"
        :name="item.name"
      >
        {{ item.label }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>
