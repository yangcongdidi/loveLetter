module.exports = {
    //...
    devServer:{
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000',//后端接口地址
                changeOrigin: true,//是否允许跨越
                ws:true,
                pathRewrite: {
                    '^/api': '',//重写,
                }
            }
        },
    }

}


