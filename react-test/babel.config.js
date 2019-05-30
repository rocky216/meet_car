const presets=  [
  [
    "@babel/env",
    {
      "targets": {
        "browsers": ["last 2 versions", "ie >= 9"]
      },
      // useBuiltIns: "usage"
    }
  ],
  // "@babel/preset-stage-1",
  "@babel/preset-react",
  
]

const plugins = [
  
]

module.exports = {
  presets,
  plugins
}