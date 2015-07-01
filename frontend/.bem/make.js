//process.env.YENV = 'production';

var PATH = require('path');

MAKE.decl('Arch', {
    blocksLevelsRegexp: /^.+?\.blocks/,
    bundlesLevelsRegexp: /^.+?\.bundles/,
    getLibraries: function () {
        return {
            'bem-core': {
                type: 'git',
                url: 'git@github.com:JIoJIaJIu/bem-core.git',//'git@github.com:bem/bem-core.git',
                treeish: 'v2'
            },
            'bem-forms': {
                type: 'git',
                url: 'git@github.com:bem/bem-forms.git',
                treeish: 'master'
            }
        }
    }
});

MAKE.decl('BundleNode', {
    getTechs: function () {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'stylus',

            'css',
            'html',
            'priv.js',

            'vanilla.js',
            'browser.js',
            'browser.js+bemhtml'
        ];
    },

    getLevelsMap: function () {
        return {
            desktop: [
                'bem-core/common.blocks',
                'bem-core/desktop.blocks',
                'bem-forms/common.blocks',
                'bem-forms/design/common.blocks',
                'bem-forms/libs/bem-components/common.blocks',
                'bem-forms/libs/bem-components/desktop.blocks',
                'bem-forms/libs/bem-components/design/common.blocks',
                'bem-forms/libs/bem-components/design/desktop.blocks',
                'common.blocks',
                'desktop.blocks'
            ]
        };
    }
});