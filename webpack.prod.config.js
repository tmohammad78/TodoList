const path=require('path');
const autoprefixer= require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports={
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename : 'bundle.js' ,
        chunkFilename:'[id].js',
        publicPath:''
    },
    resolve:{
        extensions : ['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use:[
                    { 
                        loader: 'style-loader' 
                    },
                    { 
                        loader: 'css-loader' ,
                        options:{
                            
                            // minimize:false,
                            // sourceMap:false
                        }
                    },
                    { 
                        loader: 'postcss-loader',
                        options:{
                            ident: 'postcss',
                            plugins: ()=>{
                                autoprefixer({
                                    // browsers:[
                                    //     "> %1",
                                    //     "last 2 versions"
                                    // ]
                                })
                            }
                        }
                    },
                    { 
                        loader: 'sass-loader' 
                    }      
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html' ,
            filename: 'index.html',
            inject: 'body'
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}