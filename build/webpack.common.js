const path = require('path');

const sourcePath = path.resolve(__dirname, '..', 'src');
const assetPath = path.resolve(__dirname, '..', 'src', 'assets');
const utilsPath = path.resolve(__dirname, '..', 'src', 'utils');
const sharedPath = path.resolve(__dirname, '..', 'src', 'shared');
const entryPath = path.resolve(__dirname, '..', 'src', 'index.tsx');
const outputPath = path.resolve(__dirname, '..', 'dist', 'bundle');
const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');

module.exports = {
    entry: {
        index: entryPath,
    },
    output: {
        path: outputPath
    },
    resolve: {
        alias: {
            'src': sourcePath,
            'assets': assetPath,
            'utils': utilsPath,
            'shared': sharedPath
        },
        extensions: ['.tsx', '.js', '.json', '.scss'], // Eliminates need to include extensions when importing
        modules: [sourcePath, nodeModulesPath], // src folder will take precedences when searching for file 
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: sourcePath,
                exclude: nodeModulesPath,
                loader: ['babel-loader', 'awesome-typescript-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: { 
                        name (file) {
                            return process.env.NODE_ENV === 'production' 
                                ? '[name]-[hash:5].[ext]'
                                : '[name].[ext]';
                        }
                    }
                }
            }
        ]
    }
};