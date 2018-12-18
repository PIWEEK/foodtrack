module.exports = {
  baseUrl: '',
  pluginOptions: {
    cordovaPath: 'cordova'
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/styles/reset.scss';
          @import '@/styles/variables.scss';
        `
      }
    }
  }
}
