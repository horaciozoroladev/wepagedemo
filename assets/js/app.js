
$(document).ready(function () {

    loadingDefaults();

});

const loadingDefaults = () => {

    document.getElementById('navbar-title').innerText = TITLE;
    document.getElementById('title').innerText = TITLE;

    renderMenu();

    $('#form-login').hide();

}

const renderMenu = () => {

    let menuItems = '';
    let menuSubItems = '';

    MENU.forEach(m => {

        switch (m.id) {
            case 1:

                m.subPages.forEach( sP => {
                    menuSubItems += `
                    <li><a class="dropdown-item" href="#">${sP.page}</a></li>
                    `;
                })
                menuItems += `

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${m.page}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        ${menuSubItems}
                    </ul>
                </li>
                `;
                break;
            case 2:
                menuItems += `
                <li class="nav-item" id="${m.page}">
                    <a class="nav-link" href="#" onclick="${m.action}">${m.page}</a>
                </li>
                `;
                break;
            default:
                menuItems += `
                <li class="nav-item" id="${m.page}">
                    <a class="nav-link" href="#">${m.page}</a>
                </li>
                `;
                break;
        }

    });

    document.getElementById('navbar-nav').innerHTML = menuItems;

}

const showIniciarSesion = () => {

    $('#form-login').show();

}

const hideIniciarSesion = () => {

    $('#form-login').hide();

}
