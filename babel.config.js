const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.37.1",
            targets: {
                esmodules: true
            },
            bugfixes: true
        }
    ]
];

const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-object-rest-spread"
];

module.exports = { presets, plugins };
