const path = require('path')
module.exports = {
    //安装live-server 打包后可直接打开dist中的index.html
    baseUrl: './',
    outputDir: './dist',
    lintOnSave: true,
    chainWebpack: config => {
        // https://github.com/vuejs/vue-cli/issues/1104
        // typescript building error when import .vue file with separate .ts file, 即在 ts 文件中无法引入 .vue 组件;
        // 下面的代码解决上面这个 bug, 解决方法来源: https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/111
        const types = config.module.rule('scss').oneOfs.store
        types.forEach(type => {
            type
                .use('sass-resource-loader')
                .loader('sass-resources-loader')
                .options({
                    // patterns: [path.join(__dirname, './src/assets/less/index.less')]
                    resources: './src/assets/sass/index.scss',
                })
                .end()
        })
    }
}