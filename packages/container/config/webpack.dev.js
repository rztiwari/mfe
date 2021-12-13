const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketting: 'marketting@http://localhost:8081/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        })
    ]
}

module.exports = merge(commonConfig, devConfig);