import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  history: 'hash',
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'umi',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: [
        { path: '/', component: './src/pages/Index' },
        { path: '/index', component: './src/pages/Index' },
        { path: '/dashboard', component: './src/pages/Dashboard' },
      ]
    }],
  ],
}

export default config;
