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
                redirectTo: 'productos.html',
                stringQuery: 'cocktail',
                action: ''
            },
            {
                id: 1,
                page: 'Cervezas',
                redirectTo: 'productos.html',
                stringQuery: 'beer',
                action: ''
            },
            {
                id: 2,
                page: 'Licores y destilados',
                redirectTo: 'productos.html',
                stringQuery: 'tequila',
                action: ''
            },
            {
                id: 3,
                page: 'Vinos y espumosos',
                redirectTo: 'productos.html',
                stringQuery: 'wine',
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

const STYLES = {
    visibility: {
        _self: `visibility`,
        hidden: `hidden`,
        visible: `visible`
    }
}


// Methods

const showOrHide = (arr, option) => {
    const visibilityHidden = `${STYLES.visibility._self}: ${STYLES.visibility.hidden}`;
    const visibilityVisible = `${STYLES.visibility._self}: ${STYLES.visibility.visible}`;

    if (arr.length == 1) {
        switch (option) {
            case STYLES.visibility.hidden: {
                document.getElementById(arr[0]).style = visibilityHidden;
                break;
            }
            case STYLES.visibility.visible: {
                document.getElementById(arr[0]).style = visibilityVisible;
                break;
            }
        }
    } else {
        arr.forEach(element => {
            switch (option) {
                case STYLES.visibility.hidden: {
                    document.getElementById(element).style = visibilityHidden;
                    break;
                }
                case STYLES.visibility.visible: {
                    document.getElementById(element).style = visibilityVisible;
                    break;
                }
            }
        });
    }
}