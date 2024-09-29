import fg from 'fast-glob';
import { getGitUserInfo } from 'git-user-info';
import dayjs from 'dayjs';

const NODE_PLOP_UTILS = 'node_modules/@jswork/plop-utils';

interface Options {
  pattern?: string | string[];
  basePath?: string;
}

const defaults: Options = {
  pattern: ['./.templates/**/index.js', `${NODE_PLOP_UTILS}/__tpls__/**/index.js`],
  basePath: 'src/shared',
};

const load = async (plop: any, options?: any) => {
  const { pattern, ...rest } = { ...defaults, ...options } as Required<Options>;
  const templates = await fg(pattern, { absolute: true });

  for (const template of templates) {
    const generator = await import(template);
    generator.default(plop, rest);
  }
};

const metadata = async () => {
  const user = await getGitUserInfo();
  const datetime = dayjs().format('YYYY-MM-DD HH:mm:ss');

  return {
    user,
    datetime,
  };
};

export { load, metadata };
