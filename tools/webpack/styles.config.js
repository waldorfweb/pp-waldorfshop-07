const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path");
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = env => {
    env = env || {};
    return {
        name: "styles",
        mode: env.prod ? "production" : "development",
        entry: {
            base: "./resources/scss/base.scss",
            checkout: "./resources/scss/checkout.scss",
            // icons: "./resources/scss/icons.scss",
            shopbuilder: "./resources/scss/shopbuilder.scss"
        },
        module: {
            rules: [{
                test: /.\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: !env.prod
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: !env.prod,
                            plugins: [
                                require("autoprefixer")(),
                                purgecss({
                                    content: [
                                        './src/**/*.php',
                                        './resources/**/*.vue',
                                        './resources/**/*.json',
                                        './resources/**/*.js',
                                        './resources/**/*.twig',
                                        './node_modules/Ceres/resources/**/*.twig',
                                        './node_modules/Ceres/src/**/*.php',
                                        // './node_modules/bootstrap/**/*.js'
                                    ],
                                    safelist: [
                                        /^category-/,
                                        /^d-/,
                                        /^dia-/,
                                        /^fa-/,
                                        /^filter-/,
                                        /^mb-/,
                                        /^ml-/,
                                        /^mr-/,
                                        /^mt-/,
                                        /^mx-/,
                                        /^my-/,
                                        /^m-/,
                                        /^nav-/,
                                        /^page-body/,
                                        /^pb-/,
                                        /^pl-/,
                                        /^pr-/,
                                        /^pt-/,
                                        /^px-/,
                                        /^py-/,
                                        /^p-/,
                                        /^section-/,
                                        /^wd-/,
                                        /^widget_/,
                                        /breadcrumb/,
                                        /caption/,
                                        /col-/,
                                        /flex/,
                                        /header/,
                                        /mainmenu/,
                                        'btn-form',
                                        'image-form',
                                        /^widget-item-list/,
                                        /carousel-inner/,
                                        /carousel-item/,
                                        /^fa-chevron-/,
                                        /category-home/,
                                        /^bs-5/,
                                        /^footernav-5col/,
                                        'footernav-info',
                                        'widget-legal-information',
                                        /^b2b/,
                                        /^img-cover/,
                                        /img/,
                                        /^sib/,
                                        /^slider-startseite/,
                                        /^catcarousel/,
                                        'initiative-icon',
                                        /^header-first-/,
                                        /newsletter-columns/,
                                        /^top-kategorien/

                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !env.prod,
                            outputStyle: env.prod ? "compressed" : "expanded"
                        }
                    }
                ]
            }]
        },
        plugins: [
            new FixStyleOnlyEntriesPlugin(),
            new MiniCssExtractPlugin({
                filename: "../../css/dia/ceres-[name]" + (env.prod ? ".min" : "") + ".css",
            })
        ],
        output: {
            path: path.resolve(__dirname, "../../resources/js/dist")
        }
    };
};