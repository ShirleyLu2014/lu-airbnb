const path = require("path");
const pathResolve = (pathname) => path.resolve(__dirname, pathname);
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@hooks": pathResolve("src/hooks"),
      "@comp": pathResolve("src/components"),
      "@pages": pathResolve("src/pages"),
    },
  },
};
