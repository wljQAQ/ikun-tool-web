/*
 * @Author: wlj
 * @Date: 2022-10-20 14:43:15
 * @LastEditors: wlj
 * @LastEditTime: 2022-10-21 10:59:03
 * @Description:
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        //* css模块化
        modules: {
          // css模块化 文件以.module.[css|less|scss]结尾
          generateScopedName: '[name]__[local]___[hash:base64:5]',
          hashPrefix: 'prefix'
        },
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/assets/style/theme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
