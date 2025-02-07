const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const darkTheme = require('antd/dist/dark-theme');
// const compactTheme = require('antd/dist/compact-theme');

const baseOverrides = [
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // '@primary-color': '#5A85F3',
            ...darkTheme,
        },
    }),
];

module.exports = override(baseOverrides);
