const postcssPrefixSelector = require("postcss-prefix-selector");

module.exports = {
  // Add you postcss configuration here
  // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
  plugins: [
    ["autoprefixer"],
    postcssPrefixSelector({
      prefix: 'div[id$="angularjs"] not(single-spa-parcel)',
    }),
  ],
};
