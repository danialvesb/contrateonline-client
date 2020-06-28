const path = require('path');

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@templates': path.resolve(__dirname, 'src', 'templates'),
      },
    },
  },
};
