# simple-mask-text


This is a simple masked text (normal text and input text).

## Install

`npm i simple-mask-text` 

or

`yarn add simple-mask-text` 

<br />

## Usage (TextInputMask)

For all the masks you will use in this way:

<br />

### Cel Phone

Mask:

-   BRL (default): `(99) 9999-9999` or `(99) 99999-9999` (will detect automatically)
-   INTERNATIONAL: `+999 999 999 999`

```js
SimpleMask.toMask('cel-phone', '11234567890', {
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99) '
})

// return "(11) 23456-7890"


SimpleMask.toMask('cel-phone', '555555555555', {
  maskType: 'INTERNATIONAL',
})

// return "+555 555 555 555"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('cel-phone', '(11) 23456-7890')

// return "11234567890"
```
#### Options

| name       | type    | required | default | description |
| ---------- | ------- | -------- | ------- | ----------- |
| maskType | string | no | `maskType` | the type of the mask to use. Available: `BRL` or `INTERNATIONAL` |
| withDDD | boolean | no | `true` | if the mask type is `BRL`, include the DDD |
| dddMask | string | no | `(99) ` | if the mask type is `BRL`, the DDD mask |

<br />

### CPF

Mask: `999.999.999-99`

```js
SimpleMask.toMask('cpf', '26859785854')

//return "268.597.858-54"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('cpf', '268.597.858-54')

// return "26859785854"
```

<br />

### CNPJ

Mask: `99.999.999/9999-99`

```js
 SimpleMask.toMask('cnpj', '52541236000189')

 //return "52.541.236.0001-89"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('cnpj', '52.541.236.0001-89')

// return "52541236000189"
```

<br />

### Credit Card

Mask:

-   visa or master: `9999 9999 9999 9999` or `9999 **** **** 9999` (obfuscated)
-   amex: `9999 999999 99999` or `9999 ****** 99999` (obfuscated)
-   diners: `9999 999999 9999` or `9999 ****** 9999` (obfuscated)

```js
SimpleMask.toMask('credit-card', '999999999999999', {
  obfuscated: true
})

// return "9999 **** **** 9999"


SimpleMask.toMask('credit-card', '999999999999999', {
  obfuscated: false
})

// return "9999 9999 9999 9999"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('credit-card', '9999 9999 9999 9999')

// return [ '999', '999', '999', '999', '999' ] {array}
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| obfuscated | boolean | no       | `false`              | if the mask should be obfuscated or not|
| issuer     | string  | no       | `visa-or-mastercard` | the type of the card mask. The options are: `visa-or-mastercard`, `amex` or `diners` |

<br />

### Custom

Mask: `defined by pattern`

* `9` - accept digit.
* `A` - accept alpha.
* `S` - accept alphanumeric.
* `*` - accept all, EXCEPT white space.

Ex: `AAA-9999` 

```js
// SIMPLE
SimpleMask.toMask('custom', '123456', {
  /**
   * mask: (String | required | default '')
   * the mask pattern
   * 9 - accept digit.
   * A - accept alpha.
   * S - accept alphanumeric.
   * * - accept all, EXCEPT white space.
  */
    mask: '999 - 999'
})

// return "123 - 456"
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| mask | string | **YES** | | The mask pattern |

<br />

### Money

Mask: `R$ 999,99` (fully customizable)

```js
SimpleMask.toMask('money', parseFloat('100.5'), {
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$ ',
    suffixUnit: ''
})

// return "R$ 100,50"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('money', 'R$ 100,50')

// return 100.5 {number}
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| precision | number | no | `2` | The number of cents to show |
| separator | string | no | `,` | The cents separator |
| delimiter | string | no | `.` | The thousand separator |
| unit | string | no | `R$` | The prefix text |
| suffixUnit | string | no | `''` | The sufix text |

<br />

### Only Numbers

Mask: `accept only numbers`

```js
SimpleMask.toMask('only-numbers', 'AAL 36789 18900 0190')

// return "36789189000190"
```

<br />

### Zip Code

Mask: `99999-999`

```js
SimpleMask.toMask('zip-code', '08150000')

// return "08150-000"


/*REVERT TO ORIGINAL VALUE*/
SimpleMask.toRawValue('zip-code', '08150-000')

// return "08150000"
```

## Thanks to

-   Thanks to [Ben-hur Santos Ott](https://github.com/benhurott/react-native-masked-text) =).
-   Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).
