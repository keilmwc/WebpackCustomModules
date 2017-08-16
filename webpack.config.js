const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // Extract CSS into seperate file


const config = {
    entry: './src/index.js',

    // Configure output properties
    output: {
        path: path.resolve(__dirname, 'dist') ,
        filename: 'bundle.js',
        publicPath: 'dist/'
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
            },
            {
                // Compress images
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000} // Limit image size to 40000 bytes if it does uses "file-loader"
                    },

                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css') // Finds any files that were transformed by by the loader and save as style.css
    ]
};

module.exports = config;