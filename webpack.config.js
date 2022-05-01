const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx', // Or 'ts' if you don't need tsx
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.wasm$/,
        type: 'asset/inline',
      },
    ],
  },
};
