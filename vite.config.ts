import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'

const htmlPlugin = () => ({
  name: 'html-transform',
  transformIndexHtml(html) {
    return html.replace(/<title>(.*?)<\/title>/, '<title>FDC-缺陷分类监控系统</title>')
  }
})

export default defineConfig(({ mode, command }) => ({
  plugins: [
    viteMockServe({
      mockPath: 'mock', // 你的mock文件存放目录
      enable: command === 'serve', // 确保只在开发环境中启用
      watchFiles: true // 启用文件监视，当 mock 文件变化时自动重载
    }),
    vue({
      script: {
        defineModel: true
      }
    }),
    UnoCSS(),
    svgLoader(),
    htmlPlugin(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue\??/],
      imports: [
        'vue',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar', 'createDiscreteApi']
        },
        'vue-router',
        '@vueuse/core',
        {
          vue: ['createVNode', 'render'],
          'vue-router': ['createRouter', 'createWebHistory', 'useRouter', 'useRoute'],
          'lodash-es': [['*', '_']]
        },
        {
          from: 'vue',
          imports: ['App', 'ComponentPublicInstance', 'DefineComponent', 'Component', 'PropType', 'h', 'defineModel'],
          type: true
        },
        {
          from: 'vue-router',
          imports: ['RouteRecordRaw', 'RouteLocationRaw', 'LocationQuery', 'NavigationFailure', 'RouteParams', 'RouteLocationNormalizedLoaded', 'RouteRecordName', 'NavigationGuard'],
          type: true
        }
      ],
      resolvers: mode === 'development' ? [NaiveUiResolver()] : [],
      dirs: ['./src/hooks'],
      dts: './auto-imports.d.ts',
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8088',
        target: 'http://10.160.10.219:8088',
        // target: 'http://10.200.214.244:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'store': path.resolve(__dirname, 'src/store'),
      'comps': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'modules': path.resolve(__dirname, 'src/modules'),
      'router': path.resolve(__dirname, 'src/router'),
      'widgets': path.resolve(__dirname, 'src/widgets'),
      'plugins': path.resolve(__dirname, 'src/plugins'),
      'mixins': path.resolve(__dirname, 'src/mixins')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {}
    }
  }
}))
