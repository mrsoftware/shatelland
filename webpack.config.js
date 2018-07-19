const path = require('path');

module.exports = {
    target: "electron-main",
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname,'public/dist'),
        filename: "bundle.js",
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx','.css','.sass','.scss']
    }
};