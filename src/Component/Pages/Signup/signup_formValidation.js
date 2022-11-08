const emailValidation = (email, setEmailError) => {
    const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (!email) {
        setEmailError('Email filed is empty')
        return
    }
    if (!emailReg.test(email)) {
        setEmailError('Not a valid email')
        return
    }
    return email
}

const userNameValidation = (name, setNameError) => {
    const regix = /^[a-zA-Z0-9_-]{3,16}$/
    if (name === '') {
        setNameError('input filed is empty')
        return
    }

    if (name.length < 6) {
        setNameError('Your name must be at least 6 characters')
        return
    }

    return name
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

export { emailValidation, passwordValidation, userNameValidation }