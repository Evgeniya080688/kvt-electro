const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./src/html/views");

module.exports = {
  entry: {
      main: ['babel-polyfill', './src/js/index.js', './src/less/style.less']
    },
  output: {
    filename: "./js/bundle.js"
  },
  devServer: {
      contentBase: path.join(__dirname, "src"),
      compress: true,
      port: 8080,
      watchContentBase: true,
      progress: true
  },
  devtool: "source-map",
  module: {
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }  
        },
        {
          test: /\.html$/,
          include: path.resolve(__dirname, "src/html/includes"),
          use: ["raw-loader"]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            exclude: /node_modules/,
            use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader',
            'postcss-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                //name: '[path][name].[ext]',
                name: '[name].[ext]',
          }
        },
        
        {
            test: /\.(less)$/,
            include: path.resolve(__dirname, "src/less"),
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                      plugins: () => autoprefixer({
                        overrideBrowserslist: ['last 3 versions', '> 1%']
                      })
                    }, 
                },         
                'less-loader'
                 
            ]
        },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            use: "url-loader"
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/style.bundle.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/fonts",
        to: "./fonts"
      },
      {
        from: "./src/favicon",
        to: "./favicon"
      },
      {
        from: "./src/img",
        to: "./img"
      },
      {
        from: "./src/uploads",
        to: "./uploads"
      }
    ])
  ].concat(htmlPlugins)
};



