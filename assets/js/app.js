window.onload = () => {
    loadingDefaults();

    const onloadHideElements = [
        // sign in
        'signin_nombres_v',
        'signin_apellidos_v',
        'signin_nombres_v',
        'signin_email_v',
        'signin_pwd_v',
        // log in
        'email_v',
        'pwd_v'
    ];
    // changeImg404();
    showOrHide(onloadHideElements, STYLES.visibility.hidden);
}

const changeImg404 = () => {

    setTimeout(() => {
        document.getElementById('img404').src = "./assets/images/broken-bottle.jpg";
    }, 1500);
}

const loadingDefaults = () => {

    document.getElementById('navbar-title').innerText = TITLE;
    document.getElementById('title').innerText = TITLE;

    renderMenu();

}

const renderMenu = () => {

    let menuItems = '';
    let menuSubItems = '';

    let menuItems2 = '';
    let menuSubItems2 = '';

    MENU.forEach(m => {

        switch (m.id) {
            case 1:

                m.subPages.forEach(sP => {
                    menuSubItems += `
                    <li><a class="dropdown-item" href="${sP.redirectTo}?sq=${sP.stringQuery}">${sP.page}</a></li>
                    `;
                })
                menuItems += `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${m.page}
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        ${menuSubItems}
                    </ul>
                </li>
                `;
                break;
            default:
                menuItems += `
                <li class="nav-item" id="${m.page}">
                    <a class="nav-link" href="${m.redirectTo}">${m.page}</a>
                </li>
                `;
                break;
        }

    });

    MENU_2.forEach(m => {

        switch (m.id) {

            default:
                menuItems2 += `
                <li class="nav-item" id="${m.page}">
                    <a class="nav-link" href="${m.redirectTo}">${m.page}</a>
                </li>
                `;
                break;
        }

    });

    document.getElementById('navbar-nav').innerHTML = menuItems;
    document.getElementById('navbar-nav-2').innerHTML = menuItems2;

}

const showIniciarSesion = () => {

    showOrHide(['form-login'], STYLES.visibility.visible);

}

const hideIniciarSesion = () => {

    showOrHide(['form-login'], STYLES.visibility.hidden);

}

const showCrearCuenta = () => {

    showOrHide(['form-signin'], STYLES.visibility.visible);

}

const hideCrearCuenta = () => {

    showOrHide(['form-signin'], STYLES.visibility.hidden);

}

const onClickCrearCuenta = () => {

    onKeyUpNombreSignInEvent();
    onKeyUpApellidoSignInEvent();
    onKeyUpEmailSignInEvent();
    onKeyUpClaveSignInEvent();

    const cuenta = {
        nombres: document.getElementById('signin_nombres').value || '',
        apellidos: document.getElementById('signin_apellidos').value || '',
        email: document.getElementById('signin_email').value || '',
        clave: btoa(document.getElementById('signin_pwd').value || '')
    };

    console.table(cuenta ?? {});
    alert(JSON.stringify(cuenta));
}

const onClickIniciarSesion = () => {
    onKeyUpEmailLogInInEvent();
    onKeyUpClaveLogInInEvent();

    const cuenta = {
        email: document.getElementById('email').value || '',
        clave: btoa(document.getElementById('pwd').value || '')
    };

    console.table(cuenta ?? {});
    alert(JSON.stringify(cuenta ?? {}));
}
