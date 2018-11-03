// webpack.config.js
const path = require('path');  // 路径处理模块
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        index: path.join(__dirname, "/src/index.js")   // 入口
    }, 
    output: {
        path: path.join( __dirname, "/dist"), // 打包后的文件存放的地方
        publicPath: '/dist/',  // 设置公共路径
        filename: "bundle.js", // 打包后输出文件的文件名
        libraryTarget: 'umd'   // 将你的library暴露为所有的模块定义下都可运行的方式，它将可在 CommonJS, AMD 环境下运行
    },
    module: {
        rules: [
            {
                test: /\.vue$/,   // vue-loader
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,           // 正则匹配以.css结尾的文件
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {
                test: /\.(png|jpg|svg|gif)$/,  // 图片loader
                use: ['url-loader']
            },
            {
                test: /\.js$/,    
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}