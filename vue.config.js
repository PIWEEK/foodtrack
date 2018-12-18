module.exports = {
  baseUrl: '',
  pluginOptions: {
    cordovaPath: 'cordova'
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import '@/styles/variables.scss';`
      }
    }
  }
}
