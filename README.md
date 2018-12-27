# validator-brazil

Este módulo permite a validação de CPF e CNPJ. Documentos unicamente brasileiros.

## Getting started

#### Install with NPM

```
$ npm install validator-brazil --save
```

#### Install with Yarn

```
$ yarn add validator-brazil
```

#### How to use with ES6

```js
import { isCnpj, isCpf } from "validator-brazil";

console.log(isCnpj("00111222000100"));
console.log(isCpf("12312345600"));
```

#### How to use with ES5

```js
const validator = require("validator-brazil");

console.log(validator.isCnpj("00111222000100"));
console.log(validator.isCpf("12312345600"));
```
