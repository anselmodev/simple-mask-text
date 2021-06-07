const BaseMask = require('./_base.mask')
const CustomMask = require('./custom.mask')

const ZIP_CODE_MASK = '99999-999'

const MASK_OPTIONS = {
    mask: ZIP_CODE_MASK
}

class ZipCodeMask extends BaseMask {
    static getType() {
        return 'zip-code'
    }

    getValue(value, settings) {
        return CustomMask.shared.getValue(value, MASK_OPTIONS)
    }

    getRawValue(maskedValue, settings) {
        return super.removeNotNumbers(maskedValue)
    }

    validate(value, settings) {
        if (!!value) {
            return value.length === ZIP_CODE_MASK.length
        }

        return true
    }

    getMask(value, settings) {
        return ZIP_CODE_MASK
    }
}

module.exports = ZipCodeMask;