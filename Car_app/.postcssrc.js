// https://github.com/michael-ciniawsky/postcss-load-config
const baseSize = 37.5

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['defaults', 'ios >= 6.0']
    },
    "postcss-pxtorem": {
      "rootValue": baseSize,
      "selectorBlackList": ["van-"],
      "propList": ["*"]
    },
    // 'postcss-adaptive': { remUnit: 75, autoRem: true }
  }
}
