import fg from 'fast-glob';
import { getGitUserInfo } from 'git-user-info';
import dayjs from 'dayjs';

const NODE_PLOP_UTILS = 'node_modules/@jswork/plop-utils';

interface Options {
  pattern?: string | string[];
}

const defaults: Options = {
  pattern: ['./.templates/**/index.js', `${NODE_PLOP_UTILS}/__tpls__/**/index.js`],
};

const load = async (plop: any, options?: any) => {
  const { pattern } = { ...defaults, ...options } as Required<Options>;
  const templates = await fg(pattern, { absolute: true });

  for (const template of templates) {
    const generator = await import(template);
    generator.default(plop);
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
