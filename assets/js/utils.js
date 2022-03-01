const TITLE = 'AlcoStore';

const MENU = [
    {
        id: 0,
        page: 'Inicio',
        redirectTo: 'index.html',
        action: '',
        subPages: []
    },
    {
        id: 1,
        page: 'Productos',
        redirectTo: '#',
        action: '',
        subPages: [
            {
                id: 0,
                page: 'Cocteles',
                redirectTo: '404.html',
                action: ''
            },
            {
                id: 1,
                page: 'Cervezas',
                redirectTo: '404.html',
                action: ''
            },
            {
                id: 2,
                page: 'Licores y destilados',
                redirectTo: '404.html',
                action: ''
            },
            {
                id: 3,
                page: 'Vinos y espumosos',
                redirectTo: '404.html',
                action: ''
            },
        ]
    }
]

const MENU_2 = [
    {
        id: 0,
        page: 'Contáctanos',
        redirectTo: '404.html',
        action: '',
        subPages: []
    },
    {
        id: 1,
        page: 'Registrarse',
        redirectTo: 'registro.html',
        action: '',
        subPages: []
    },
    {
        id: 2,
        page: 'Iniciar sesion',
        redirectTo: 'iniciar-sesion.html',
        action: '',
        subPages: []
    }
]