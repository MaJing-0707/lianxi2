import routes from './router.config'
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // base: '/docs/',
  publicPath: '/static/',
  hash: true,
  history: 'hash',
  routes: routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      //antd: {},
      //dva: {},
      //dynamicImport: {},
      // title: 'lianxi2',
     // dll: {},

     // routes: {
     //   exclude: [
      //    /components\//,
      //  ],
     // },
    }],
  ],
}
