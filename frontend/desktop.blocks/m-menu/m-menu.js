modules.define('m-menu', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    BEMDOM.decl('m-menu', {
        onSetMod: {
            js: {
                'inited': function () {
                    this.bindTo('item', 'click', function (e) {
                        this._onMenuItemClick(e);
                    });
                },

                '': function () {
                    this.unbindFrom('item', 'click');
                }
            }
        },

        _onMenuItemClick: function (e) {
            e.stopPropagation();
            var target = $(e.currentTarget);

            this.delMod(this.elem('item'), 'selected');
            this.setMod(target, 'selected');
        }
    })

    provide(BEMDOM);
})