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
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public')
    }
};