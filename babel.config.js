module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-class-static-block',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@constants': './src/constants',
        },
      },
    ],
  ],
};
