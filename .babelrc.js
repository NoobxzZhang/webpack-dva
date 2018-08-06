const path = require('path');

module.exports = {
  presets: ['react', 'stage-3', 'env'],
  plugins: [
    'transform-runtime',
    'transform-object-rest-spread',
    [
      'module-resolver',
      {
        alias: {
          components: path.join(__dirname, './src/components'),
        },
      },
    ],
    [
      'import',
      {
        libraryName: 'antd',
        style: true, // or 'css'
      },
    ],
  ],
};
