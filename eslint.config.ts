import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  formatters: {
    prettierOptions: {
      tabWidth: 2,
    },
    css: true,
  },
  vue: true,
  typescript: true,
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 },
      },
    ],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'regexp/no-unused-capturing-group': 'off',
    'ts/no-unsafe-function-type': 'off',
  },
})
