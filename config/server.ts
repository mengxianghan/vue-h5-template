export const server = {
  host: '0.0.0.0',
  proxy: {
    '/api_base': {
      target: '/',
      changeOrigin: true,
      rewrite: (path: string) => path.replace('/api_base', ''),
    },
  },
}
