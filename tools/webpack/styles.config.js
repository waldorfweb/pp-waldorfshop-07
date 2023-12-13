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
                                        /^b2b/,
                                        /^bg-/,
                                        /^bs-5/,
                                        /^catcarousel/,
                                        /^category-/,
                                        /^d-/,
                                        /^dia-/,
                                        /^fa-/,
                                        /^fa-chevron-/,
                                        /^filter-/,
                                        /^footernav-5col/,
                                        /^header-first-/,
                                        /^img-cover/,
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
                                        /^sib/,
                                        /^slider-startseite/,
                                        /^text-/,
                                        /^top-kategorien/,
                                        /^wd-/,
                                        /^widget_/,
                                        /^widget-item-list/,
                                        /^availability-/,
                                        /basket-quantity-indicator/,
                                        /wishlist-quantity-indicator/,
                                        /mobile-wunschliste/,
                                        /breadcrumb/,
                                        /btn/,
                                        /caption/,
                                        /carousel-inner/,
                                        /carousel-item/,
                                        /category-home/,
                                        /col-/,
                                        /flex/,
                                        /header/,
                                        /header-first-columns/,
                                        /img/,
                                        /mainmenu/,
                                        /newsletter-columns/,
                                        /special-tags/,
                                        /test/,
                                        'btn-form',
                                        'footernav-info',
                                        'image-form',
                                        'initiative-icon',
                                        'widget-legal-information'
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