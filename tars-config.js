module.exports = {
    "autoprefixerConfig": [
        "> 1%",
        "last 2 versions",
        "Firefox ESR",
        "android 4"
    ],
    "postcss": [],
    "svg": {
        "active": true,
        "workflow": "sprite",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "js": {
        "workflow": "concat",
        // "workflow": "modular",
        // "bundler": "webpack",
        "bundler": "",
        "lint": true,
        "useBabel": true,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false
        },
        "jsPathsToConcatBeforeModulesJs": [
            'markup/static/js/main.js'
        ],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "browserSyncConfig": {
        "baseDir": "./dev",
        "port": 3004,
        "open": true,
        "browser": "default",
        "startUrl": "/index.html",
        "useNotifyInBrowser": true,
        "injectChanges": false
    },
    "minifyHtml": false,
    "staticPrefix": "static/",
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "handlebars",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96,
        192
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img"
    }
};