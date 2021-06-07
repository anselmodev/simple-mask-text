const BaseMask = require('./_base.mask')
const CustomMask = require('./custom.mask')

const CNPJ_MASK = '99.999.999/9999-99'

const validateCnpj = cnpj => {
    var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2)
    var dig1 = new Number()
    var dig2 = new Number()
    var i = 0

    var exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace(exp, '')
    var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)))

    for (i = 0; i < valida.length; i++) {
        dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0
        dig2 += cnpj.charAt(i) * valida[i]
    }
    dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11)
    dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11)

    return dig1 * 10 + dig2 == digito
}

const customMaskOptions = { mask: CNPJ_MASK }

class CnpjMask extends BaseMask {
    static getType() {
        return 'cnpj'
    }

    getValue(value, settings) {
        return CustomMask.shared().getValue(value, customMaskOptions)
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        var isEmpty = (value || '').trim().length === 0
        return !isEmpty && validateCnpj(value)
    }

    getMask(value, settings) {
        return CNPJ_MASK
    }
}

module.exports = CnpjMask;