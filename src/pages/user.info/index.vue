<script setup lang="ts">
definePage({
  meta: {
    requiresAuth: true,
    title: '设置',
  },
})
</script>

<template>
  <div>
    <van-cell-group>
      <van-cell
        title="头像"
        is-link
        center
        class="[&_.van-cell\_\_value]:leading-none"
      >
        <template #value>
          <van-image
            round
            :width="40"
            :height="40"
            src="avatar.jpeg"
          />
        </template>
      </van-cell>
      <van-cell
        title="昵称"
        is-link
      />
      <van-cell
        title="性别"
        is-link
        center
        value="去填写"
        label="优化您在购物过程中的商品推荐逻辑"
      />
      <van-cell
        title="生日"
        is-link
        center
        value="去填写"
        label="正确填写生日当天可能会有惊喜"
      />
      <van-cell
        title="手机号"
        is-link
      />
    </van-cell-group>
  </div>
</template>

<style scoped lang="scss">

</style>
