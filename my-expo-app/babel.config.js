module.exports = function (api) {
  api.cache(true);
  let plugins = [
    'react-native-reanimated/plugin', // Uncomment ONLY if you install Reanimated
  ];

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins,
  };
};
