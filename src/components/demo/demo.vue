<script setup lang="ts">
import type { DemoProps } from './common'
import { defaultDemoProps } from './common'

defineOptions({
  name: 'XDemo',
})

withDefaults(
  defineProps<DemoProps>(),
  defaultDemoProps,
)
</script>

<template>
  <div>demo</div>
</template>

<style scoped lang="scss">

</style>
