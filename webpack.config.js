const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode:'development',
   entry: {
      filename: path.resolve(__dirname,'src/index.js')
      },
   output: {
      path: path.resolve(__dirname,'dist'),
             filename: 'bundle.js',
             assetModuleFilename:'[name] [ext]'
      },
   performance:{
          hints: false,
          maxAssetSize: 512000,
          maxEntrypointSize: 512000
      },
   devServer:{
      port: 9000,
      compress: true,
      hot: true,
      static:{
         directory: path.join(__dirname,'dist')
         }
      },
      module:{
          rules:[
                  {  //CSS-SCSS  =======================
                    test: /\.scss$/,
                    use: ["style-loader","css-loader","sass-loader"] 
                  },
                     // Изображения=====================
                  {   
                     test: /\.(png|svg|jpg|jpeg|gif)$/i,
                      type: 'asset/resource'
                   }
               ]
      },
      plugins:[
          new htmlWebpackPlugin({
            title:"My Page",
            filename: "index.html",
            template:"src/index.html"
          })
      ]


}


