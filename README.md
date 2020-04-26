# validator-brazil

With this module, you can validate the CPF, CNPJ and CEP numbers. Documents only Brazilian.

[![npm version](https://badge.fury.io/js/validator-brazil.svg)](https://badge.fury.io/js/validator-brazil)

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

## CPF

```js
import { cpf } from "validator-brazil";

// No points or hyphens
cpf.validate("29018170097"); // false
cpf.validate("12312345600"); // false

// With points or hyphens
cpf.validate("123.123.456-00"); // false
```

## CNPJ

```js
import { cnpj } from "validator-brazil";

// No points or hyphens
cnpj.validate("54334068000136"); // true
cnpj.validate("00111222000100"); // false

// With points or hyphens
cnpj.validate("54.334.068/0001-36"); // true
```

## CEP

```js
import { isCep } from "validator-brazil";

// No points or hyphens
isCep("43710130"); // true
isCep("5471013423"); // false

// With points or hyphens
isCep("43710-130"); // true
```

## How to use with ES5

```js
const validator = require("validator-brazil");

// No points or hyphens
validator.isCnpj("54334068000136"); // true
validator.isCnpj("00111222000100"); // false
validator.isCpf("29018170097"); // true
validator.isCpf("12312345600"); // false

// With points or hyphens
validator.isCnpj("54.334.068/0001-36"); // true
validator.isCpf("123.123.456-00"); // false
```

### License

validator-brazil is [MIT licensed](./LICENSE).