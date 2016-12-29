const path = require(`path`);

const webpack = require(`webpack`);
const { UglifyJsPlugin } = webpack.optimize;

const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const ExtractTextWebpackPlugin = require(`extract-text-webpack-plugin`);
const configHtmls = require(`webpack-config-htmls`)();

const extractCSS = new ExtractTextWebpackPlugin(`css/style.css`);

const publicPath = `/`;

const copy = new CopyWebpackPlugin([{
  from: `./src/assets`,
  to: `assets`,
}], {
  ignore: [ `.DS_Store` ],
});

const config = {
  entry: [
    `./src/css/style.css`,
    `./src/js/script.js`,
  ],

  resolve: {
    modules: [__dirname, `node_modules`],
    extensions: [`.js`, `.jsx`, `.css`],
  },

  output: {
    path: path.join(__dirname, `dist`),
    filename: `js/[name].[hash].js`,
    publicPath,
  },

  devtool: `source-map`,

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: extractCSS.extract([
          {
            loader: `css-loader`,
            options: { importLoaders: 1 },
          },
          { loader: `postcss-loader` },
        ]),
      },
      {
        test: /\.html$/,
        loader: `html-loader`,
        options: {
          attrs: [
            `audio:src`,
            `img:src`,
            `video:src`,
            `source:srcset`,
          ], // read src from video, img & audio tag
        },
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [
          { loader: `babel-loader` },
          {
            loader: `eslint-loader`,
            options: { fix: true },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/,
        loader: `url-loader`,
        options: {
          limit: 1000, // inline if < 1 kb
          context: `./src`,
          name: `[path][name].[ext]`,
        },
      },
      {
        test: /\.(mp3|mp4|wav)$/,
        loader: `file-loader`,
        options: {
          context: `./src`,
          name: `[path][name].[ext]`,
        },
      },
    ],
  },

  plugins: [extractCSS, copy],
};

if (process.env.NODE_ENV === `production`) {
  config.module.rules.push({
    test: /\.(svg|png|jpe?g|gif)$/,
    loader: `image-webpack-loader`,
    enforce: `pre`,
  });

  config.plugins = [
    ...config.plugins,
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
  ];

} else {
  config.performance = { hints: false };
}

config.plugins = [...config.plugins, ...configHtmls.plugins];

module.exports = config;
