import { execSync } from 'node:child_process'
import process from 'node:process'
import { consola } from 'consola'
import fse from 'fs-extra'
import { camelCase, kebabCase, upperFirst } from 'lodash-es'

async function execute() {
  // 获取命令行参数
  const args = process.argv.slice(2)
  const filename = args[0] || await consola.prompt('请输入组件名称：', {
    placeholder: '建议使用小写，多个单词用短横线连接',
  })

  if (!filename) {
    consola.error('请提供组件名称')
    return
  }

  const arr = filename.split('/')
  // 获取最后一个单词作为组件名
  const name = arr.pop()
  const kebabCaseName = kebabCase(name)
  const upperCamelCaseName = upperFirst(camelCase(name))
  // 组件路径，组件都创建在 components 目录下
  const dirPath = `./src/${arr.join('/')}${arr.length ? '/' : ''}components/${kebabCaseName}`

  if (fse.existsSync(dirPath)) {
    consola.error(`${dirPath} 已存在`)
    return
  }

  fse.ensureDirSync(dirPath)

  // index.ts
  fse.outputFileSync(
    `${dirPath}/index.ts`,
    `export { default as ${upperCamelCaseName} } from './${kebabCaseName}.vue'
export * from './common'
`,
    'utf8',
  )

  // common.ts
  fse.outputFileSync(
    `${dirPath}/common.ts`,
    `export type ${upperCamelCaseName}Instance = InstanceType<typeof import('./${kebabCaseName}.vue')['default']>

export interface ${upperCamelCaseName}Props {}

export interface ${upperCamelCaseName}Slots {
  default: () => void
}

export interface ${upperCamelCaseName}Emits {}

export const default${upperCamelCaseName}Props = \{\}
`,
    'utf8',
  )

  // component.vue
  fse.outputFileSync(
    `${dirPath}/${kebabCaseName}.vue`,
    `<script setup lang="ts">
import type { ${upperCamelCaseName}Props, ${upperCamelCaseName}Slots, ${upperCamelCaseName}Emits } from './common'
import { default${upperCamelCaseName}Props } from './common'

defineOptions({
  name: '${upperCamelCaseName}',
})

withDefaults(
  defineProps<${upperCamelCaseName}Props>(),
  default${upperCamelCaseName}Props,
)

defineSlots<${upperCamelCaseName}Slots>()

defineEmits<${upperCamelCaseName}Emits>()
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">

</style>
`,
    'utf8',
  )

  consola.start(`正在创建 ${dirPath}`)

  execSync(`eslint "${dirPath}" --fix`)

  consola.success(`创建完成 ${dirPath}`)
}

execute()
