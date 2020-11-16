module.exports = {
  devServer: {
    port: 8888,
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module.rule("images").test(/\.(png|jpe?g|gif|webp|JPG)(\?.*)?$/)
  },
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: '@import "./src/styles/common/common.scss";',
  //     },
  //   },
  // },
}
