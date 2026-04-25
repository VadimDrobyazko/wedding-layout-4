import path from 'node:path'
import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] })

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: { root: 'build' },
  },
  source: {
    define: publicVars,
  },
  resolve: {
    alias: {
      '@router': path.resolve(__dirname, 'src/router'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@clients': path.resolve(__dirname, 'src/clients'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  html: {
    template: './public/index.html',
  },
})
