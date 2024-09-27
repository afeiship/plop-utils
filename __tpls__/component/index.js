import { metadata } from '@jswork/plop-utils';
import { URL } from 'url';
const __dirname = new URL('.', import.meta.url).pathname;

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('npm.component', {
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
        destination: 'src/shared/components/{{dashCase name }}/',
        base: __dirname,
        templateFiles: `${__dirname}/*.hbs`,
        data: metadata
      }
    ]
  });
}
