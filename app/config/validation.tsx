export const validationTextOnlyInput = (text: string) => {
    const expression = /^[a-zA-Z_0-9+%*#@!\s]*$/
    return expression.test(text)
}

export const validationPrice = (text: string) => {
    const expression = /^[0-9]\d{0,7}(?:\.\d{1,2})?$/
    return expression.test(text)
}
