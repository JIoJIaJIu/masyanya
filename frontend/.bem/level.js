exports.getTechs = function () {
    var techs = {
        'bemjson.js': 'v2/bemjson.js',
        'bemdecl.js': 'v2/bemdecl.js',
        'deps.js': 'v2/deps.js',
        'bemhtml': '../../bem-core/.bem/techs/bemhtml.js',
        'stylus': '../../node_modules/bem/lib/techs/v2/styl.js',

        'css': 'v2/css',
        'html': '../../bem-core/.bem/techs/html.js',
        'priv.js': '../../.bem/techs/priv.js.js',

        'js': 'v2/js',
        'vanilla.js': '../../bem-core/.bem/techs/vanilla.js',
        'browser.js': '../../bem-core/.bem/techs/browser.js',
        'browser.js+bemhtml': '../../bem-core/.bem/techs/browser.js+bemhtml.js'
    };

    return techs;
}

exports.getConfig = function () {
    return {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-core/common.blocks',
            '../../bem-core/desktop.blocks',
            '../../bem-forms/libs/bem-components/common.blocks',
            '../../bem-forms/libs/bem-components/desktop.blocks',
            '../../bem-forms/libs/bem-components/design/common.blocks',
            '../../bem-forms/libs/bem-components/design/desktop.blocks',
            '../../bem-forms/common.blocks',
            '../../bem-forms/design/common.blocks',
            '../../common.blocks',
            '../../desktop.blocks'
        ])
    };
}