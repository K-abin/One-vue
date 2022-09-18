/**
 * @Author CXB
 * @ClassName vue.config.js
 * @date 2022/9/18 19:05
 * @Description TODO
 */


// vue.config.js 配置说明
//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
// 这里只列一部分，具体配置参考文档
// module.exports = {
//     // webpack-dev-server 相关配置
//     devServer: {
//         host: 'localhost',
//         port: 8080,
//         open: true,
//         proxy: {
//             // detail: https://cli.vuejs.org/config/#devserver-proxy
//             '/api': {
//                 target: 'http://localhost:1111',
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api' : ''
//                 }
//             }
//         },
//
//     }
//
// }

let proxyObj = {};
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:1111',
    changeOrigin: true,
    pathRewrite: {
        '^/':''
    }
}

module.exports={
    devServer:{
        host: 'localhost',
        port:8080,
        proxy: proxyObj
    }
}

