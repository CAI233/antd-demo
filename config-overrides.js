const { override, fixBabelImports,addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addDecoratorsLegacy()
);
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)   //{ "legacy": true }一定不能掉，否则报错
//     return config;
// };