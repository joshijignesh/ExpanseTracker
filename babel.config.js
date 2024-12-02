module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@assets': './app/assets',
          '@utils': './app/utils',
          '@hooks': './app/hooks',
          '@navigation': './app/navigation',
          '@app-redux': './app/redux',
          '@provider': './app/provider',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
