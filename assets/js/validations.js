
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
        $('#signin_nombres_v').show();
    } else {
        $('#signin_nombres_v').hide();
    }
}

const onKeyUpApellidoSignInEvent = () => {
    const value = document.getElementById('signin_apellidos').value;
    const regex = new RegExp(/[a-z]/g);

    if (!regex.exec(value)) {
        $('#signin_apellidos_v').show();
    } else {
        $('#signin_apellidos_v').hide();
    }
}

const onKeyUpEmailSignInEvent = () => {
    const value = document.getElementById('signin_email').value;
    const regex = new RegExp(/^([\da-z_\.-]+)@([\dalcostore\.-]+)\.([a-z\.]{2,6})$/);

    if (!regex.exec(value)) {
        $('#signin_email_v').show();

    } else {
        $('#signin_email_v').hide();

    }
}

const onKeyUpClaveSignInEvent = () => {
    const value = document.getElementById('signin_pwd').value;
    const regex = new RegExp(/^[a-z0-9]+$/i);

    if (!regex.exec(value)) {
        $('#signin_pwd_v').show();
    } else {
        $('#signin_pwd_v').hide();
    }
}

// login
const onKeyUpEmailLogInInEvent = () => {
    const value = document.getElementById('email').value;
    const regex = new RegExp(/^([\da-z_\.-]+)@([\dalcostore\.-]+)\.([a-z\.]{2,6})$/);

    if (!regex.exec(value)) {
        $('#email_v').show();
    } else {
        $('#email_v').hide();
    }
}

const onKeyUpClaveLogInInEvent = () => {
    const value = document.getElementById('pwd').value;
    const regex = new RegExp(/^[a-z0-9]+$/i);

    if (!regex.exec(value)) {
        $('#pwd_v').show();
    } else {
        $('#pwd_v').hide();
    }
}


