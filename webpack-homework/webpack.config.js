const htmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path");
module.exports={
    mode:'development',
    entry: {
        index : "./src/index.js",
        vendor:"./src/vendor.js"
    },
    output:{
        clear:true,
        path:path.resolve(__dirname, "./build"),
        filename:"[name].[hash:3].js",
    },
    devtool:"source-map",
    devServer:{
      hot: true
    },
    target:"web",
    module:{
        rules:[
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "stylus-loader",
                ]
            },{
                test:/\.txt$/,
                use: "raw-loader",
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({template:"./src/index.html",})
    ]
}