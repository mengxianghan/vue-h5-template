import { execSync } from 'node:child_process'
import process from 'node:process'
import { consola } from 'consola'
import fse from 'fs-extra'
import { camelCase, upperFirst } from 'lodash-es'

async function execute() {
  // 获取命令行参数
  const args = process.argv.slice(2)
  const filename = args[0] || await consola.prompt('请输入名称：', {
    placeholder: '建议使用小写，多个单词用短横线连接',
  })

  if (!filename) {
    consola.error('请提供名称')
    return
  }

  const isFullPath = filename.endsWith('.ts')
  const dirPath = isFullPath ? `./src/${filename}` : `./src/${filename}.ts`
  const name = isFullPath ? filename.split('/').pop()!.slice(0, -3) : filename
  const camelCaseName = camelCase(name)
  const upperCamelCaseName = upperFirst(camelCaseName)

  if (fse.existsSync(dirPath)) {
    consola.error(`${dirPath} 已存在`)
    return
  }

  fse.ensureFileSync(dirPath)

  fse.outputFileSync(
    `${dirPath}`,
    `import { defineStore } from 'pinia'

export const use${upperCamelCaseName}Store = defineStore('${camelCaseName}', ()=>{
  return {}
})
`,
    'utf8',
  )

  consola.start(`正在创建 ${dirPath}`)

  execSync(`eslint "${dirPath}" --fix`)

  consola.success(`创建完成 ${dirPath}`)
}

execute()
