<script setup lang="ts">
</script>

<template>
  <div>
    <van-sticky>
      <van-search shape="round" />
    </van-sticky>

    <div class="flex items-center bg-white my-2 px-4 py-3">
      <div>
        新人特价人选1件
      </div>
      <div class="ml-1 text-xs">
        最低1.99元，首单免邮
      </div>
      <div class="ml-auto text-xs flex items-center">
        查看更多
        <span class="iconify tdesign--chevron-right" />
      </div>
    </div>

    <van-grid
      :border="false"
      class="mt-2"
    >
      <van-grid-item
        text="水果鲜花"
        icon="photo-o"
      />
      <van-grid-item
        text="蔬菜豆制品"
        icon="photo-o"
      />
      <van-grid-item
        text="肉禽蛋"
        icon="photo-o"
      />
      <van-grid-item
        text="水产海鲜"
        icon="photo-o"
      />
      <van-grid-item
        text="快手菜"
        icon="photo-o"
      />
      <van-grid-item
        text="冰淇淋面点"
        icon="photo-o"
      />
      <van-grid-item
        text="粮油调味"
        icon="photo-o"
      />
      <van-grid-item
        text="酒水饮料"
        icon="photo-o"
      />
    </van-grid>

    <van-row
      :gutter="[8, 8]"
      class="mt-2"
    >
      <van-col span="24">
        <div
          class="bg-white h-24 flex items-center justify-center"
        >
          <van-icon
            name="photo-o"
            size="28"
          />
        </div>
      </van-col>

      <van-col
        span="12"
      >
        <div
          class="bg-white h-24 flex items-center justify-center"
        >
          <van-icon
            name="photo-o"
            size="28"
          />
        </div>
      </van-col>
      <van-col
        span="12"
      >
        <div
          class="bg-white h-24 flex items-center justify-center"
        >
          <van-icon
            name="photo-o"
            size="28"
          />
        </div>
      </van-col>
    </van-row>

    <van-row
      :gutter="[8, 8]"
      class="my-2"
    >
      <van-col
        v-for="item in 10"
        :key="item"
        span="12"
      >
        <div class="w-full bg-white">
          <div
            :style="{
              '--van-image-placeholder-background': '#fff',
            }"
          >
            <van-image class="w-full aspect-square" />
          </div>
          <div class="px-3 py-2">
            <div class="font-medium">
              和路雪迷你梦龙浓郁黑巧克力+松露口味冰淇淋6支装 255g
            </div>
            <div class="text-2xs mt-1">
              <span>2种口味各3支</span>
              <span>比利时巧克力</span>
            </div>
            <div class="text-2xs">
              销量飙升近5倍
            </div>
            <div class="flex items-center mt-2">
              <van-tag
                :style="{
                  '--van-tag-font-size': '10px',
                }"
              >
                新人价
              </van-tag>
              <div class="flex-1">
                <span class="text-xs">￥</span>
                <span class="text-base">41</span>
                <span class="text-xs">.8</span>
                <span class="text-2xs">/盒</span>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-lg bg-gray-200 flex items-center justify-center">
                <van-icon name="cart-o" />
              </div>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<style lang="scss" scoped></style>
