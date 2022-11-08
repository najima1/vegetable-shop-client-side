const emailValidation = (email, setEmailError) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!regex.test(email)) {
        setEmailError('Not a valid email')
        return
    }

    return email
}

const passwordValidation = (password, setPassworError) => {
    if (password.length < 8) {
        setPassworError("Your password must be at least 8 characters");
        return
    }
    if (password.search(/[a-z]/i) < 0) {
        setPassworError("Your password must contain at least one letter.");
        return
    }
    if (password.search(/[0-9]/) < 0) {
        setPassworError("Your password must contain at least one digit.");
        return
    }

    return password
}

export { emailValidation, passwordValidation }