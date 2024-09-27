/**
 * @Author: aric 1290657123@qq.com
 * @Date: 2024-09-27 22:35:49
 * @LastEditors: aric 1290657123@qq.com
 * @LastEditTime: 2024-09-27 22:38:00
 */

import { metadata } from '@jswork/plop-utils';
import clipboardy from 'clipboardy';

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plops
) {
  plop.setGenerator('npm.locale', {
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
          templateFile: '.templates/__raw__/locale/locale.yml.hbs',
          data: metadata,
        },
      ];
    },
  });
}
