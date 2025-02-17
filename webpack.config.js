module.exports = {

  entry: "./app/App.js",

  output: {
    filename: "public/bundle.js"
  },


  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        excluse: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }

}
