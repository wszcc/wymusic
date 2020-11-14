const { override, fixBabelImports } = require('customize-cra');
const path = require("path");

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  config =>{
    config.resolve.alias = {
        "@": path.resolve(__dirname, "src")
    };
    return config;
},
);


 
