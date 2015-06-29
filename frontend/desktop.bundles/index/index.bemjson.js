({
    block : 'page',
    title : 'Д',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [{ elem : 'js', url : '_index.js' }],
    //mods : { theme : 'islands' },
    content : [{
            tag: 'a',
            attrs: { name: 'top', style: 'position: absolute; top: 0' }
        }, {
            block: 'm-menu',
            mods: { vertical: true },
            content: [
                {
                    title: 'Кто мы?',
                    url: '#who',
                    state: 'selected'
                }, {
                    title: 'Режим дня',
                    url: '#schedule',
                }, {
                    title: 'Занятия',
                    url: '#classes',
                }, {
                    title: 'Питание',
                    url: '#nutrition',
                }, {
                    title: 'Безопасность',
                    url: '#security',
                }, {
                    title: 'Фотогалерея',
                    url: '#photos',
                }, {
                    title: 'Наши центры',
                    url: '#centers',
                }, {
                    title: 'Записаться',
                    url: '#sign',
                }, {
                    title: 'Сотрудничество',
                    url: '#cooperation',
                }
            ]
        }, {
            block: 'm-header',
            content: {
                block: 'm-menu',
                content: [
                    {
                        title: 'Масяня',
                        url: '#top',
                        state: 'selected'
                    }, {
                        title: 'О нас',
                        url: '#who'
                    }, {
                        title: 'Режим дня',
                        url: '#schedule'
                    }, {
                        title: 'Занятия',
                        url: '#classes'
                    }, {
                        title: 'Питание',
                        url: '#nutrition'
                    }, {
                        title: 'Безопасность',
                        url: '#security'
                    }, {
                        title: 'Фото',
                        url: '#photos'
                    }, {
                        title: 'Наши центры',
                        url: '#centers'
                    }, {
                        title: 'Контакты',
                        url: '#contacts'
                    }, {
                        title: 'Личный кабинет',
                        url: '#parea'
                    }
                ]
            }
        }, {
            block: 'm-roof',
            content: [
                {
                    block: 'm-info',
                    content: [
                        {
                            block: 'm-button',
                            content: 'Записаться в садик'
                        }, {
                            block: 'm-phone',
                            mods: { 'size' : 'small' },
                            content: '+7 (903) 008-99-96'
                        }, {
                            block: 'm-clock',
                            from: '8:00',
                            to: '19:00'
                        }, {
                            block: 'm-link',
                            mods: { 'size' : 'px14' },
                            content: 'support@masyanya.club'
                        }
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'main' },
                    anchor: 'who',
                    content: 'Сеть частных домашних детских садиков «Масяня»'
                }
            ]
        }, {
            block: 'm-first-floor',
            content: [
                {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18'},
                    content: [
                        '«Масяня» — комфортные детские садики в Москве со всеми необходимыми условиями и безопасностью. Мы работаем по режиму, программе и меню, взятых за основу из лучших государственных учреждений. Наша цель — вырастить здоровых, умных, веселых, самостоятельных и любознательных деток! ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Как мы это делаем?'
                        }
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'subsection' },
                    anchor: 'schedule',
                    content: 'Режим дня'
                }
            ]
        }, {
            block: 'm-room',
            content: [
                {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18' },
                    content: [
                        'На протяжении всего дня вашему малышу будут предложены творческие и развивающие занятия, весёлые игры на свежем воздухе и в помещении, Одним словом, вашему ребёнку не дадут заскучать! ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Подробнее о досуге'
                        }
                    ]
                }, {
                    block: 'm-carusel',
                    content: [
                        '../desktop.blocks/m-carusel/images/1slide.jpg'
                    ]
                }   
            ]
        }, {
            block: 'm-second-floor',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'classes',
                    content: 'Увлекательный досуг для ваших детей'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18'},
                    content: [
                        'Мы используем только современные и передовые материалы и наглядные пособия для досуга и развития детей. Их ждут рисование, конструирование, аппликация, лепка, музыка, окружающий миру развитие речи, математика, уроки вежливости, физкультура, прогулки и игры на свежем воздухе, соблюдение режима. ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Подробнее о методике.'
                        }
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'subsection' },
                    content: 'Расписание занятий'
                }
            ]
        }, {
            block: 'm-time-table',
            content: [

            ]
        }, {
            block: 'm-third-floor',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'nutrition',
                    content: 'Питание'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18'},
                    content: [
                        'Наше меню разработано диетологом, специально для детских садов. Учитываются пожелания родителей: есть возможность исключить некоторые продукты в связи с индивидуальными противопоказаниями. Еда только домашняя, заботливо приготовленная из свежих продуктов. ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Подробное меню на каждый день'
                        }
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'subsection' },
                    content: 'Наше меню'
                }
            ]
        }, {
            block: "m-kitchen_",
            content: [
                {
                    block: 'm-carusel',
                    content: [
                        '../desktop.blocks/m-carusel/images/k1slide.png'
                    ]
                }   
            ]
        }, {
            block: "m-fourth-floor",
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'security',
                    content: 'Убедитесь сами в безопасности вашего ребёнка'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18'},
                    content: [
                        'Вы в любое время можете увидеть, чем занят ваш малыш как с компьютера, так и с мобильных устройств! Во всех комнатах садика установлены вебкамеры. При заключении договора вы получаете логин и пароль для доступа к онлайн наблюдению за ребенком и работой воспитателей  ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Узнайте больше о наших мерах безопасности'
                        }
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'subsection' },
                    content: 'Трансляция'
                }
            ]
        }, {
            block: 'm-security',
            content: [
                {
                    block: 'm-button',
                    mods: { 'type' : 'camera' },
                    content: 'Смотреть трансляцию'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px16'},
                    content: 'Доступна только для родителей, чьи дети уже записаны у нас!',
                }
            ]
        }, {
            block: 'm-fifth-floor',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'photos',
                    content: 'фотогалерея'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18'},
                    content: [
                        'Мы проводим увлекательные мероприятия и весёлые праздники с конкурсами и подарками, встречаем новый год, празднуем дни рождения малышей. Фотоотчёт событий вы можете посмотреть, авторизовавшись ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'в личном кабинете'
                        },
                        '. Веселье и праздники — это ещё не всё, что ждёт вас и вашего ребёнка. ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Что ещё вы получаете, выбирая «Масяню»'
                        },
                    ]
                }, {
                    block: 'm-heading',
                    mods: { 'type' : 'subsection' },
                    content: 'Преимущества'
                }
            ]
        }, {
            block: 'm-cellar',
            content: [
                {
                    block: 'm-carusel',
                    mods: { 'type' : 'photos' },
                    content: [
                        '../desktop.blocks/m-carusel/images/foto1.jpg',
                    ]
                }, {
                    block: 'm-grass'
                }
            ]
        },/* , {
            block: 'm-heading',
            mods: { 'size' : 'px26' },
            content: 'Увлекательный досуг для ваших детей'
        }, {
            block: 'm-heading',
            mods: { 'type' : 'subsection' },
            content: 'Режим дня'
        }, */{
            block: 'm-centers',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'centers',
                    content: 'Наши Садики'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px18' },
                    content: [
                        'Выберите ближайший к вам садик и запишитесь в свободную группу. ',
                        {
                            block: 'm-link',
                            mods: { 'size' : 'px18' },
                            content: 'Адреса и контакты'
                        },
                        ' всех наших детских садиков.'
                    ]
                }, {
                    elem: 'panel',
                    content: [
                        {
                            block: 'm-center-item',
                            imageUrl: '../desktop.blocks/m-center-item/images/center1.jpg',
                            addresName: 'Пролетарская 24/1',
                            addresUrl: '#',
                            type: 'green',
                            content: 'Идёт набор в группу'
                        }, {
                            block: 'm-center-item',
                            imageUrl: '../desktop.blocks/m-center-item/images/center2.jpg',
                            addresName: 'Пролетарская 24/1',
                            addresUrl: '#',
                            type: 'yellow',
                            content: 'Осталось 2 места!'
                        }, {
                            block: 'm-center-item',
                            imageUrl: '../desktop.blocks/m-center-item/images/center3.jpg',
                            addresName: 'Пролетарская 24/1',
                            addresUrl: '#',
                            type: 'red',
                            content: 'Свободных мест нет'
                        }, {
                            block: 'm-center-item',
                            imageUrl: '../desktop.blocks/m-center-item/images/center4.jpg',
                            addresName: 'Пролетарская 24/1',
                            addresUrl: '#',
                            type: 'green',
                            content: 'Запись началась'
                        }
                    ]
                }
            ]
        }/*, {
            block: 'm-map',
            content: 'Карта'
        }*/, {
            block: 'm-questions',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'contacts',
                    content: 'Задать вопросы и узнать цены вы можете по телефону:'
                }, {
                    block: 'm-phone',
                    mods: { 'size' : 'big' },
                    content: '+7 (903) 008-99-96'
                }, {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    content: 'Или по электронной почте:'
                }, {
                    block: 'm-link',
                    mods: { 'size' : 'px30' },
                    content: 'support@masyanya.club'
                }
            ]
        }, {
            block: 'm-cooperation',
            content: [
                {
                    block: 'm-heading',
                    mods: { 'size' : 'px26' },
                    anchor: 'cooperation',
                    content: 'Хотите Сотрудничать? — Мы ждём ваших писем и звонков'
                }, {
                    block: 'm-paragraph',
                    mods: { 'size' : 'px16' },
                    content: 'Обращайтесь по всем вопросам:'
                }, {
                    block: 'm-list',
                    content: [
                        '— коммерческие и партнерские предложения;',
                        '— предложения об аренде;',
                        '— предложения товаров и услуг;',
                        '— прием на работу;',
                        '— купить франшизу'
                    ]
                }
            ]
        }, {
            block: 'm-footer',
            content: [
                {
                    block: 'm-copyright',
                    content: '&copy; Сеть частных домашних детских садиков &laquo;Масяня&raquo;',
                    year: '2014'
                }, {
                    block: 'm-promotion',
                    content: [
                        {
                            block: 'm-heading',
                            mods: { 'size' : 'px18' },
                            content: 'Масяня в соцсетях'
                        }, {
                            block: 'm-socials-follow',
                            content: [
                                {
                                    block: 'm-social-item',
                                    tag: 'a',
                                    mods: { 'type' : 'vk' },
                                    attrs: { 'href' : '#' }
                                }, {
                                    block: 'm-social-item',
                                    tag: 'a',
                                    mods: { 'type' : 'fb' },
                                    attrs: { 'href' : '#' }
                                }, {
                                    block: 'm-social-item',
                                    tag: 'a',
                                    mods: { 'type' : 'tw' },
                                    attrs: { 'href' : '#' }
                                }, {
                                    block: 'm-social-item',
                                    tag: 'a',
                                    mods: { 'type' : 'ok' },
                                    attrs: { 'href' : '#' }
                                }
                            ]
                        }
                    ]
                }, {
                    block: 'm-developer',
                    title: 'Дизайн и разработка сайта',
                    content: 'New Mind Studio'
                }
            ]
        }
    ]
})