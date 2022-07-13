const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader'
            }]
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                {loader: MiniCssExtractPlugin.loader},
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
        new CopyPlugin({
            patterns: [
              { from: 'public/manifest.json', to: '' },
              { from: 'public/service-worker.js', to: '' },
              { from: 'public/assets/icon.png', to: 'assets' },
            ],
          }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },

        compress: true,
        port: 3000, // default 8000,
        open: true,
        historyApiFallback: true,
    },
}