/**
 * Created by Aus on 2018/2/28.
 */

var webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');

module.exports =
    {
        webpack_assets_file_path: './webpack-assets.json',
        webpack_stats_file_path: './webpack-stats.json',
        assets: {
            images: {
                extensions: [
                    'png',
                    'jpg',
                    'gif',
                    'ico'
                ]
            },
            svg: {
                extension: 'svg',
                runtime: true
            },
            markdown: {
                extension: 'md'
            },
            fonts: {
                extensions: ['woff', 'woff2', 'eot', 'ttf']
            },
            styles: {
                extensions: ['scss', 'css'],
                filter(module, regular_expression, options, log) {
                    if (options.development) {
                        return webpack_isomorphic_tools_plugin.style_loader_filter(module, regular_expression, options, log)
                    }
                },
                path: webpack_isomorphic_tools_plugin.style_loader_path_extractor,
                parser: webpack_isomorphic_tools_plugin.css_loader_parser
            }
        }
    }