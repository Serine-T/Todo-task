// eslint-disable-next-line import/no-import-module-exports
import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@containers': path.resolve(__dirname, './src/containers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@features': path.resolve(__dirname, './src/features'),
      '@app': path.resolve(__dirname, './src/app'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@customHooks': path.resolve(__dirname, './src/customHooks'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
};
