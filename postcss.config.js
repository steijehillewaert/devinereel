module.exports = {
  plugins: [
    require(`stylelint`),
    require(`postcss-reporter`)({ clearMessages: true }),
    require(`postcss-cssnext`),
    require(`postcss-will-change`),
  ],
};
