const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Extract CSS into seperate file


const config = {
    entry: './src/index.js',

    // Configure output properties
    output: {
        path: path.resolve(__dirname, 'dist') ,
        filename: 'bundle.js'
    },
    module: {

        // Specify loaders to use
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/  // Apply loader to .js extensions only
            },
            {
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
                test: /\.css$/ // Apply loader to .css extensions only
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // Finds any files that were transformed by by the loader and save as style.css
    ]
};

module.exports = config;