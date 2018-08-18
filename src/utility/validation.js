const validate = (val, rules) => {
    let isValid = true;

    for (let rule in rules) {
        switch (rule) {
            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case 'onlyDigits':
                isValid = isValid && onlyDigitsValidator(val);
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
}

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
}

const onlyDigitsValidator = val => {
    return /^[0-9]*$/.test(val);
}

export default validate;