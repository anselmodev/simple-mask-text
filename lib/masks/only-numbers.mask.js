const BaseMask = require('./_base.mask')

class OnlyNumbersMask extends BaseMask {
    static getType() {
        return 'only-numbers'
    }

    getValue(value, settings) {
        return this.removeNotNumbers(String(value))
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(String(maskedValue))
    }

    validate(value, settings) {
        return true
    }

    getMask(value, settings) {
        return ''
    }
}

module.exports = OnlyNumbersMask;