const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

let plugins = [
    new CleanWebpackPlugin([
        'dist/js',
        'dist/index.html',
        'dist/fonts',
    ], {
        verbose: false
    }),
    new HtmlWebpackPlugin({
        chunks: ['index'],
        filename: 'index.html',
        inject: 'body',
        template: './tpl/index.html'
    }),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    })
]

module.exports = {
    entry: {
        index: ['./app/index.jsx'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        modules: ['.', 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?publicPath=../&name=./fonts/compressed/[hash].[ext]',
            }
        ]
    },
    plugins: plugins
}