const reactNativePathRegex =
  /node_modules(\\{1,2}|\/)(@react-native|react-native)/;

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
          '@config': ['./.config'],
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
  overrides: [
    {
      include: [reactNativePathRegex],
      presets: ['module:metro-react-native-babel-preset'],
    },
    {
      exclude: [reactNativePathRegex],
      plugins: [
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        ['@babel/plugin-proposal-private-methods', {loose: true}],
      ],
    },
  ],
};
