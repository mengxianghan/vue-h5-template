# Vue 3 + TypeScript + Vite 快速启动模板

## 介绍

这是一个基于 Vue 3 + TypeScript + Vite 的项目模板，其中集成了 ESlint、Tailwind CSS、Pinia、Vue Router、Pinia、Axios 等。

## 编辑器配置

### VSCode

- 安装 `ESlint`
- 安装 `Vue(Official)`
- 安装 `Tailwind CSS IntelliSense`

注意：如出现配置文件未生效导致异常，例如：eslint 检测异常、tailwindcss 无法自动补全。遇到此问题，请尝试重启 VSCode 或 WebStorm

### WebStorm

- 开箱即用

## 开发

### 安装依赖

``` shell
pnpm install
```

### 启动服务

```shell
pnpm dev
```

### 构建

#### 测试环境

```shell
pnpm build:test
```

#### 预生产环境

```shell
pnpm build:pre
```

#### 生产环境

```shell
pnpm build:prod
```
