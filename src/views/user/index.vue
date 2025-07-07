<script setup lang="ts">

</script>

<template>
  <div>
    <div class="px-6 py-4 bg-white">
      <div class="flex items-center">
        <van-image
          width="56"
          height="56"
          round
        >
          <template #loading>
            <van-icon
              name="contact-o"
              size="24"
            />
          </template>
        </van-image>
        <div class="ml-4">
          <div class="text-base font-medium">
            蒸笋壳鱼
          </div>
          <div class="flex items-center mt-1">
            <span class="iconify tdesign--mobile" />
            <span class="ml-0.5">189****2345</span>
          </div>
        </div>
        <div class="ml-auto">
          <span class="iconify tdesign--setting text-lg" />
        </div>
      </div>
    </div>

    <van-grid
      class="mt-2"
      :column-num="3"
      :border="false"
    >
      <van-grid-item
        text="优惠券"
      >
        <template #icon>
          <div class="text-2xl">
            0
          </div>
        </template>
      </van-grid-item>
      <van-grid-item
        text="福利·积分"
      >
        <template #icon>
          <div class="text-2xl">
            0
          </div>
        </template>
      </van-grid-item>
      <van-grid-item
        text="余额·充值(元)"
      >
        <template #icon>
          <div class="text-2xl">
            0
          </div>
        </template>
      </van-grid-item>
    </van-grid>

    <van-grid
      class="mt-2"
      :column-num="5"
      :border="false"
    >
      <van-grid-item
        text="待支付"
        icon="pending-payment"
      />
      <van-grid-item
        icon="logistics"
        text="待收货"
      />
      <van-grid-item
        icon="chat-o"
        text="待评价"
      />
      <van-grid-item
        icon="refund-o"
        text="售后/退款"
      />
      <van-grid-item
        icon="orders-o"
        text="我的订单"
      />
    </van-grid>

    <van-grid
      class="mt-2"
      :column-num="5"
      :border="false"
    >
      <van-grid-item
        text="商品收藏"
        icon="star-o"
      />
      <van-grid-item
        icon="location-o"
        text="收货地址"
      />
      <van-grid-item
        icon="service-o"
        text="客服帮助"
      />
      <van-grid-item
        icon="bill-o"
        text="开具发票"
      />
      <van-grid-item
        icon="records-o"
        text="意见反馈"
      />
    </van-grid>
  </div>
</template>

<style scoped>

</style>
