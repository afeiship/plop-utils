import fg from 'fast-glob';
import { getGitUserInfo } from 'git-user-info';
import dayjs from 'dayjs';

interface Options {
  pattern?: string | string[],
}

const defaults: Options = {
  pattern: './.templates/**/index.js',
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
  const date = dayjs().format('YYYY-MM-DD HH:mm:ss');

  return {
    name: user.name,
    email: user.email,
    datetime: date,
  };
};


export { load, metadata };
