<script setup lang="ts">

</script>

<template>
  <div class="h-svh bg-white px-8 pt-12">
    <van-cell-group
      :style="{
        '--van-cell-horizontal-padding': 0,
      }"
    >
      <van-field placeholder="输入手机号" />
      <van-field placeholder="输入验证码">
        <template #button>
          <van-button
            size="small"
            type="primary"
            round
          >
            获取验证码
          </van-button>
        </template>
      </van-field>
    </van-cell-group>

    <div class="flex items-center mt-5">
      <van-checkbox :icon-size="16" />
      <div class="ml-1 text-gray-500 text-xs flex">
        我已认真阅读并同意
        <span class="text-blue-500">《服务协议》</span>、
        <span class="text-blue-500">《隐私政策》</span>
      </div>
    </div>

    <div class="mt-10">
      <van-button
        block
        type="primary"
        round
      >
        登录
      </van-button>
    </div>
    <div class="mt-5 flex justify-end">
      <span class="text-blue-500 text-xs">收不到验证码？</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.van-cell::after {
  left: 0;
  right: 0;
}
</style>
