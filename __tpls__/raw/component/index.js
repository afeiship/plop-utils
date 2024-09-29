/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-09-27 22:35:49
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-09-29 11:11:13
 */

import { metadata } from '@jswork/plop-utils';
import clipboardy from 'clipboardy';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
  options
) {
  const clipboardPath = clipboardy.readSync();
  const componentPath = `${options.basePath}/components`;
  plop.setGenerator('raw.component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is this component's name?",
      },
      {
        type: 'rawlist',
        name: 'path',
        message: 'Where do you want to create this component?',
        default: componentPath,
        choices: [
          {
            name: `components (default: ${componentPath})`,
            value: componentPath,
          },
          {
            name: `clipboard (default: ${clipboardPath})`,
            value: clipboardPath,
          },
        ],
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'addMany',
          destination: `${data.path}/{{dashCase name }}/`,
          base: __dirname,
          templateFiles: `${__dirname}/*.hbs`,
          data: metadata,
        },
      ];
    },
  });
}
