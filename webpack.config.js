var webpack = require('webpack');

module.exports = {
    entry: [
        // 'script!react-bootstrap/dist/react-bootstrap.min.js',
        './app/app.jsx'
    ],
    plugins: [
    ],
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Navigation: 'app/components/Navigation.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
            ApplicationStyles: 'app/css/app.scss',
            Clock: 'app/components/Clock.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    // devtool: 'eval-source-map'
};