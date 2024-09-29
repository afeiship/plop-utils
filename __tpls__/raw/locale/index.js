/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-09-27 22:35:49
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-09-28 19:33:33
 */

import { metadata } from '@jswork/plop-utils';
import clipboardy from 'clipboardy';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
  options = {}
) {
  plop.setGenerator('raw.locale', {
    description: 'Create a locale file for a component.',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'Where do you want to create the locale file?',
        default: clipboardy.readSync(),
      },
    ],
    actions: (data) => {
      return [
        {
          type: 'add',
          path: `${data.path}/locale.yml`,
          templateFile: `${__dirname}/tpl.yml`,
          data: metadata,
        },
      ];
    },
  });
}
