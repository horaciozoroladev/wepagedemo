
// validacion de reestablecer email
const onKeyUpEmailEvent = () => {
    const email = document.getElementById('reestablecer_email').value;
    const regex = new RegExp(/^([\da-z_\.-]+)@([\dalcostore\.-]+)\.([a-z\.]{2,6})$/);
    if (regex.exec(email)) {
        document.getElementById('submit_reestablecer').removeAttribute('disabled');
    } else {

    }
}

// validacion signin


const onKeyUpNombreSignInEvent = () => {
    const value = document.getElementById('signin_nombres').value;
    const regex = new RegExp(/[a-z]/g);

    if (!regex.exec(value)) {
        showOrHide(['signin_nombres_v'], STYLES.visibility.visible);
    } else {
        showOrHide(['signin_nombres_v'], STYLES.visibility.hidden);
    }
}

const onKeyUpApellidoSignInEvent = () => {
    const value = document.getElementById('signin_apellidos').value;
    const regex = new RegExp(/[a-z]/g);

    if (!regex.exec(value)) {
        showOrHide(['signin_apellidos_v'], STYLES.visibility.visible);
    } else {
        showOrHide(['signin_apellidos_v'], STYLES.visibility.hidden);
    }
}

const onKeyUpEmailSignInEvent = () => {
    const value = document.getElementById('signin_email').value;
    const regex = new RegExp(/^([\da-z_\.-]+)@([\dalcostore\.-]+)\.([a-z\.]{2,6})$/);

    if (!regex.exec(value)) {
        showOrHide(['signin_email'], STYLES.visibility.visible);
    } else {
        showOrHide(['signin_email'], STYLES.visibility.hidden);
    }
}

const onKeyUpClaveSignInEvent = () => {
    const value = document.getElementById('signin_pwd').value;
    const regex = new RegExp(/^[a-z0-9]+$/i);

    if (!regex.exec(value)) {
        showOrHide(['signin_pwd'], STYLES.visibility.visible);
    } else {
        showOrHide(['signin_pwd'], STYLES.visibility.hidden);
    }
}

// login
const onKeyUpEmailLogInInEvent = () => {
    const value = document.getElementById('email').value;
    const regex = new RegExp(/^([\da-z_\.-]+)@([\dalcostore\.-]+)\.([a-z\.]{2,6})$/);

    if (!regex.exec(value)) {
        showOrHide(['email'], STYLES.visibility.visible);
    } else {
        showOrHide(['email'], STYLES.visibility.hidden);
    }
}

const onKeyUpClaveLogInInEvent = () => {
    const value = document.getElementById('pwd').value;
    const regex = new RegExp(/^[a-z0-9]+$/i);

    if (!regex.exec(value)) {
        showOrHide(['pwd'], STYLES.visibility.visible);
    } else {
        showOrHide(['pwd'], STYLES.visibility.hidden);
    }
}


