import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isProd = options.mode === 'production'
    const isDev = options.mode === 'development'

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            cssLoaderWithModules,
            'sass-loader'
        ]
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node-modules/,
    }

    return [
        scssLoader,
        tsLoader
    ]
}
