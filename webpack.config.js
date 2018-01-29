var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:[
        "babel-polyfill",
        "react-hot-loader/patch",
        __dirname+"/app2/index.js"
    ],
    output:{
        path:__dirname+"/static",
        filename:"bundle.js"
    },
    devtool:"eval-source-map",

    devServer:{
        contentBase:"./",
        historyApiFallback:true,
        inline:true,
        hot:true
    },

    resolve: {
        alias: {
            jquery: './jquery.min.js',  
        }
    },

        module:{
            loaders:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loaders:['babel-loader']
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({  
                template: __dirname + "/index.html"  
            }),  
            new webpack.HotModuleReplacementPlugin() 
        ]

};