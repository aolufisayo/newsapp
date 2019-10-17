module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'mobx', 'module:react-native-dotenv'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', {
      'legacy': true
    }]
  ]
};
