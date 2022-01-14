const TITLE = 'AlcoStore';

const MENU = [
    {
        id: 0,
        page: 'Inicio',
        redirectTo: '',
        action: '',
        subPages: []
    },
    {
        id: 1,
        page: 'Productos',
        redirectTo: '',
        action: '',
        subPages: [
            {
                id: 0,
                page: 'Cocteles',
                redirectTo: '',
                action: ''
            },
            {
                id: 1,
                page: 'Cervezas',
                redirectTo: '',
                action: ''
            },
            {
                id: 2,
                page: 'Licores y destilados',
                redirectTo: '',
                action: ''
            },
            {
                id: 3,
                page: 'Vinos y espumosos',
                redirectTo: '',
                action: ''
            },
        ]
    },
    {
        id: 2,
        page: 'Iniciar sesion',
        redirectTo: '',
        action: 'showIniciarSesion();',
        subPages: []
    }
]