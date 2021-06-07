// Option prop of TextInputMask.
export interface TextInputMaskOptionProp {
    // Money type.
    precision?: number
    separator?: string
    delimiter?: string
    unit?: string
    suffixUnit?: string
    zeroCents?: boolean

    // Phone type.
    withDDD?: boolean
    dddMask?: string
    maskType?: 'BRL' | 'INTERNATIONAL'

    // Datetime type.
    format?: string

    // Credit card type.
    obfuscated?: boolean
    issuer?: 'visa-or-mastercard' | 'diners' | 'amex'

    // Custom type.
    mask?: string
    validator?: (value: string, settings: TextInputMaskOptionProp) => boolean
    getRawValue?: (value: string, settings: TextInputMaskOptionProp) => any
    translation?: { [s: string]: (val: string) => string | null | undefined }
}

// MaskService
export namespace MaskService {
    function toMask(
        type: string,
        value: string,
        options?: TextInputMaskOptionProp
    ): string
    function toRawValue(
        type: string,
        maskedValue: string,
        options?: TextInputMaskOptionProp
    ): string
    function isValid(
        type: string,
        value: string,
        options?: TextInputMaskOptionProp
    ): boolean
}
