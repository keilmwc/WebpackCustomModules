var path = require('path');

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
                use: ['style-loader', 'css-loader'],
                test: /\.css$/ // Apply loader to .css extensions only
            }
        ]
    }
};

module.exports = config;