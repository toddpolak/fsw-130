
const onlyDigits = str => {
    return str.replace(/\D+/g, '')
}

module.exports.formatPhone = num => {
    let cleanNum = onlyDigits(num)

    if (cleanNum === '') { return cleanNum }

    cleanNum = cleanNum.replace(/-/g, "").replace(/\./g, "")

    return '(' + cleanNum.slice(0, 3) + ')'
        + cleanNum.slice(3, 6) + '-' + cleanNum.slice(6)
}
