var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/index.js"],
    output: {
        path: __dirname,
        filename: "./dist/prod/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                presets: ['react', 'es2015']
                }
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __LOCAL__: JSON.stringify(JSON.parse(process.env.BUILD_LOCAL || 'false')),
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __STAG__: JSON.stringify(JSON.parse(process.env.BUILD_STAG || 'false')),
            __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_STAG || 'true'))
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};