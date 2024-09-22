# plop-utils
> Plop notes.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/plop-utils
yarn add dayjs
```

## usage
```js
import { load, metadata } from '@jswork/plop-utils';

// plopfile.js
export default async function (plop) {
  await load(plop);
}

// a generator file
export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is this component's name?"
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{ name }}/',
        templateFiles: '.templates/component/*.hbs',
        data: metadata
      }
    ]
  });
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/plop-utils/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/plop-utils
[version-url]: https://npmjs.org/package/@jswork/plop-utils

[license-image]: https://img.shields.io/npm/l/@jswork/plop-utils
[license-url]: https://github.com/afeiship/plop-utils/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/plop-utils
[size-url]: https://github.com/afeiship/plop-utils/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/plop-utils
[download-url]: https://www.npmjs.com/package/@jswork/plop-utils
