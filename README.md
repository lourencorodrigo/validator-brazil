# validator-brazil

Validate Brazilian CPF, CNPJ and CEP. Lightweight, zero dependencies, written in TypeScript.

Supports the **new alphanumeric CNPJ** format (IN RFB 2.229/2024), effective from July 2026.

[![npm version](https://badge.fury.io/js/validator-brazil.svg)](https://badge.fury.io/js/validator-brazil)

## Getting started

#### Install with NPM

```
$ npm install validator-brazil
```

#### Install with Yarn

```
$ yarn add validator-brazil
```

## Usage

### ES Modules

```ts
import { isCpf, isCnpj, isCep } from "validator-brazil";
```

### CommonJS

```js
const { isCpf, isCnpj, isCep } = require("validator-brazil");
```

## API

### `isCpf(cpf: string): boolean`

Validates a Brazilian CPF (Cadastro de Pessoas Fisicas). Accepts input with or without mask.

```ts
isCpf("14552586017");       // true
isCpf("145.525.860-17");   // true
isCpf("12312345600");       // false
isCpf("123.123.456-00");   // false
```

### `isCnpj(cnpj: string): boolean`

Validates a Brazilian CNPJ (Cadastro Nacional da Pessoa Juridica). Accepts input with or without mask, both traditional numeric and the new alphanumeric format. Case insensitive.

#### Traditional (numeric)

```ts
isCnpj("54334068000136");         // true
isCnpj("54.334.068/0001-36");    // true
isCnpj("00111222000100");         // false
```

#### Alphanumeric (new format - July 2026)

```ts
isCnpj("12ABC34501DE35");         // true
isCnpj("12.ABC.345/01DE-35");    // true
isCnpj("Y0W9NJBN000176");         // true
isCnpj("Y0.W9N.JBN/0001-76");   // true
isCnpj("12abc34501de35");         // true (case insensitive)
```

### `isCep(cep: string): boolean`

Validates a Brazilian CEP (Codigo de Enderecamento Postal). Accepts input with or without hyphen.

```ts
isCep("43710130");    // true
isCep("43710-130");   // true
isCep("5471013423");  // false
```

## Alphanumeric CNPJ

Starting July 2026, the Brazilian Federal Revenue Service (Receita Federal) will issue CNPJs containing letters (A-Z) in addition to digits. The format remains 14 characters:

| Positions | Content | Allowed characters |
|-----------|---------|-------------------|
| 1-8       | Root    | `A-Z`, `0-9`      |
| 9-12      | Order   | `A-Z`, `0-9`      |
| 13-14     | Check digits | `0-9`        |

Existing numeric CNPJs remain valid and unchanged. This library handles both formats transparently.

## License

MIT
