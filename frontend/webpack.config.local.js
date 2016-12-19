var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        "./src/index.js"],
    output: {
        path: __dirname,
        filename: "./dist/local/bundle.js"
    },
    devtool: 'eval',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                presets: ['react', 'es2015']
                }
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                // I want to uglify with mangling only app files, not thirdparty libs
                test: /\.*\/dist\/local\/.*\.js$/,
                exclude: /.spec.js/, // excluding .spec files
                loader: "uglify"
            },
           /* {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
            */

        ]
    },
    'uglify-loader': {
        mangle: false
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        contentBase: './dist/local',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __LOCAL__: JSON.stringify(JSON.parse(process.env.BUILD_LOCAL || 'true')),
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __STAG__: JSON.stringify(JSON.parse(process.env.BUILD_STAG || 'false')),
            __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_STAG || 'false'))
        })
    ]
};