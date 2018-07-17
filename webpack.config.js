const path = require('path');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: path.resolve(__dirname,'public/dist'),
        filename: "bundle.js",
    },
    devServer: {
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