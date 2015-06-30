modules.define('m-menu', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, $) {
    var OFFSET = 80;
    BEMDOM.decl('m-menu', {
        onSetMod: {
            js: {
                'inited': function () {
                    this.init();
                    this.bindTo('item', 'click', function onclick (e) {
                        this._onMenuItemClick(e);
                    });

                    this.bindToWin('scroll', function onscroll(e) {
                        this._onPageScroll(e);
                    });
                },

                '': function () {
                    this.unbindFrom('item', 'click', onclick);
                    this.unbindFromWin('scroll', onscroll);
                }
            }
        },

        init: function () {
            var i;
            var page = this.findBlockOutside('page');
            var headings = page.findBlocksInside({
                block: 'm-heading',
                modName: 'anchor',
                modVal: true
            });

            this.menu = page.findBlockInside({
                block: 'm-menu',
                modName: 'vertical',
                modVal: true
            });

            this.offsets = [];
            for (i = 0; i < headings.length; i++) {
                this.offsets.push(headings[i].domElem.offset().top);
            }
            this.items = this.menu.findBlocksInside('m-menu__item');
            this.activeItem = this.menu.findBlockInside({
                            block: 'm-menu__item',
                            modName: 'selected',
                            modVal: true
                        });
        },

        _onMenuItemClick: function (e) {
            e.stopPropagation();
            var target = $(e.currentTarget);
            var targetItem = this.findBlockOn(target, 'm-menu__item');
            var prevItem = this.menu.findBlockInside({
                            block: 'm-menu__item',
                            modName: 'selected',
                            modVal: true
                        });
            if (targetItem == prevItem)
                return

            prevItem && prevItem.delMod('selected');
            targetItem.setMod('selected');

            this.activeItem = targetItem;
        },

        _onPageScroll: function (e) {
            var scrollTop    = $(window).scrollTop() + OFFSET;
            var scrollHeight = document.documentElement.scrollHeight;
            var maxScroll    = OFFSET + scrollHeight - $(window).height();
            var offsets      = this.offsets;

            var targets      = this.items;
            var activeTarget = this.activeItem;
            var i;
            /**
             *  @TODO
             *  случай когда изменилась высота скролящейся области
             **/
            /*
            if (this.scrollHeight != scrollHeight) {
              this.refresh()
            }
            */
            if (scrollTop >= maxScroll) {
                return this.activeItem != (i = targets[targets.length - 1])
                    && i.setMod('selected')
                    && this.activeItem
                    && this.activeItem.delMod('selected')
                    && ( this.activeItem = i);
            }

            if (this.activeItem && (scrollTop) <= offsets[0]) {
                this.activeItem.delMod('selected');
                this.activeItem = null
            }

            for (i = offsets.length; i--;) {
                this.activeItem != targets[i]
                    && scrollTop >= offsets[i]
                    && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
                    && targets[i].setMod('selected')
                    && (this.activeItem = targets[i])
                    && activeTarget
                    && activeTarget.delMod('selected');
            }
        },

        offsets: [], // offset().top элементов связанных с пунктами меню
        items: [],
        activeItem: {}

    });

    provide(BEMDOM);
})