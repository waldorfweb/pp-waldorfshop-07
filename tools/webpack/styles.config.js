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
                            postcssOptions: {
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
                                        safelist: {
                                            standard: [

                                            ],
                                            deep: [

                                            ],
                                            greedy: [
                                                /^accordion/,
                                                /^alert/,
                                                /^align/,
                                                /^b2b/,
                                                /^badge/,
                                                /^bg-/,
                                                /^blog-/,
                                                /^border/,
                                                /^bs-/,
                                                /^btn-/,
                                                /^button-/,
                                                /^catcarousel/,
                                                /^cmp-product/,
                                                /^container-/,
                                                /^custom-/,
                                                /^d-/,
                                                /^dia-/,
                                                /^dcf-/,
                                                /^display-/,
                                                /^dropdown-/,
                                                /^embed/,
                                                /^fa-/,
                                                /^fa-chevron-/,
                                                /^feedback-/,
                                                /^ff-/,
                                                /^filter-/,
                                                /^flag-/,
                                                /^float/,
                                                /^font-weight/,
                                                /^form-/,
                                                /^headline-/,
                                                /^iframe-/,
                                                /^img-cover/,
                                                /^input-/,
                                                /^item-details/,
                                                /^justify-/,
                                                /^l-/,
                                                /^language-/,
                                                /^m-/,
                                                /^mb-/,
                                                /^menu-/,
                                                /^ml-/,
                                                /^modal-/,
                                                /^mr-/,
                                                /^mt-/,
                                                /^mx-/,
                                                /^my-/,
                                                /^nav-/,
                                                /^notification-/,
                                                /^offset/,
                                                /^order/,
                                                /^p-/,
                                                /^page-/,
                                                /^page-body/,
                                                /^pagination/,
                                                /^pb-/,
                                                /^pl-/,
                                                /^pr-/,
                                                /^progress/,
                                                /^prop-/,
                                                /^pt-/,
                                                /^px-/,
                                                /^py-/,
                                                /^responsive/,
                                                /^rounded-/,
                                                /^section-/,
                                                /^servicebuttons/,
                                                /^shopvote-/,
                                                /^sib/,
                                                /^slider-startseite/,
                                                /^spinner/,
                                                /^table/,
                                                /^text-/,
                                                /^top-kategorien/,
                                                /^trust-/,
                                                /^ts_badge_/,
                                                /^wrapper-main/,
                                                /abgeschlossen/,
                                                /artikel/,
                                                /availability/,
                                                /basket-quantity-indicator/,
                                                /breadcrumb/,
                                                /bildunter/,
                                                /btn-form/,
                                                /btn/,
                                                /caption/,
                                                /carousel/,
                                                /category/,
                                                /checkout/,
                                                /circle/,
                                                /cmp-product/,
                                                /col-/,
                                                /cols/,
                                                /dia-footer/,
                                                /donations/,
                                                /flex/,
                                                /footernav-/,
                                                /gutters/,
                                                /h-/,
                                                /header/,
                                                /hier_vorbestellen/,
                                                /hinweis/,
                                                /image-form/,
                                                /img/,
                                                /initiative-icon/,
                                                /mainmenu/,
                                                /mitarbeiten/,
                                                /mobile-wunschliste/,
                                                /n2goForm/,
                                                /navbar-/,
                                                /newsletter-columns/,
                                                /nl2go/,
                                                /not-banner/,
                                                /page-checkout/,
                                                /page-singleitem/,
                                                /paypal/,
                                                /ppButton/,
                                                /pull/,
                                                /section/,
                                                /setraster/,
                                                /sidebar/,
                                                /single/,
                                                /social-menu-columns/,
                                                /special-tags/,
                                                /sr-only/,
                                                /svgform/,
                                                /test/,
                                                /tooltip/,
                                                /topmessage/,
                                                /trustbadge/,
                                                /umfragebutton/,
                                                /valid/,
                                                /vue-/,
                                                /w-/,
                                                /wd-/,
                                                /wd_/,
                                                /weitereinkaufen_cart/,
                                                /weiterlesen/,
                                                /whatsappc/,
                                                /widget/,
                                                /wishlist-quantity-indicator/,
                                                /zus-information/,
                                            ]
                                        }
                                    })
                                ]
                            }
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !env.prod,
                            sassOptions: {
                                outputStyle: env.prod ? "compressed" : "expanded"
                            }
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
