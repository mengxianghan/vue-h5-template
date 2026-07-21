import { execSync } from 'node:child_process'
import process from 'node:process'
import { consola } from 'consola'
import fse from 'fs-extra'

async function execute() {
  // 获取命令行参数
  const args = process.argv.slice(2)
  const filename = args[0] || await consola.prompt('请输入页面名称：', {
    placeholder: '建议使用小写，多个单词用短横线连接',
  })

  if (!filename) {
    consola.error('请提供页面名称')
    return
  }

  const dirPath = filename.endsWith('.vue') ? `./src/${filename}` : `./src/${filename}/index.vue`

  if (fse.existsSync(dirPath)) {
    consola.error(`${dirPath} 已存在`)
    return
  }

  fse.ensureFileSync(dirPath)

  // page.vue
  fse.outputFileSync(
    `${dirPath}`,
    `<script setup lang="ts">
</script>

<template>
  <div>${filename}</div>
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
