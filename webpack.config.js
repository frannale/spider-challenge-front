module.exports = [
  {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[hash]-[name].[ext]",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
      modules: ["src", "node_modules"],
    },
  },
];
