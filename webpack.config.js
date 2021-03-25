const path = require('path');

let devtool;
if (process.env.NODE_ENV==="production") {
    devtool = "eval"
} else {
    devtool = "source-map"
}

module.exports = {
    context: __dirname,
    entry: './frontend/all_treks.jsx',
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: 'bundle.js'
    },
    devtool: devtool,
    resolve: {
        extensions: [".js", ".jsx", "*"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    }
}

