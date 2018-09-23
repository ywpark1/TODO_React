const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader'
                    // options: {
                    //     presets: [
                    //         '@babel/preset-env',
                    //         '@babel/preset-react'
                    //     ]
                    // }
                },
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
};