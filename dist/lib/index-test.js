const MaskService = require('./mask-service');

console.log('custom: ', MaskService.toMask('custom', '666666', {
    mask: '999 - 999'
}));
console.log('[TO RAW] custom: ', MaskService.toRawValue('custom', '666 - 666', {
    mask: '999999'
}));

console.log('cel-phone: ', MaskService.toMask('cel-phone', '11974055235', {
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99) '
}));
console.log('[TO RAW] cel-phone: ', MaskService.toRawValue('cel-phone', '(11) 97405-5235'));

console.log('cel-phone international: ', MaskService.toMask('cel-phone', '555555555555', {
    maskType: 'INTERNATIONAL'
}));
console.log('[TO RAW] cel-phone international: ', MaskService.toRawValue('cel-phone', '+555 555 555 555'));

console.log('money: ', MaskService.toMask('money', 100.5, {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$ ',
    suffixUnit: ''
}));
console.log('[TO RAW] money: ', MaskService.toRawValue('money', 'R$ 100,50'));

console.log('zip-code: ', MaskService.toMask('zip-code', '08150000'));
console.log('[TO RAW] zip-code: ', MaskService.toRawValue('zip-code', '08150-000'));

console.log('cpf: ', MaskService.toMask('cpf', '29549786862'));
console.log('[TO RAW] cpf: ', MaskService.toRawValue('cpf', '295.497.868-62'));

console.log('cnpj: ', MaskService.toMask('cnpj', '36789189000190'));
console.log('[TO RAW] cnpj: ', MaskService.toRawValue('cnpj', '295.497.868-62'));

console.log('only-numbers: ', MaskService.toMask('only-numbers', 'AAL 36789 18900 0190'));

console.log('credit-card: ', MaskService.toMask('credit-card', '999999999999999', {
    obfuscated: true
}));
console.log('[TO RAW] credit-card: ', MaskService.toRawValue('credit-card', '999 999 999 999 999'));