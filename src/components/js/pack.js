const path = require('path')
module.exports = {
    entry: '@/src/man.js',
    output: {
        path: path.resolve(_dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: '/\.scss/', use: 'sass-loader'
            }
        ]
    }
}