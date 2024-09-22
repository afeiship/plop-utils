import fg from 'fast-glob';
import { getGitUserInfo } from 'git-user-info';

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
  const date = new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).replace(/\//g, '-');

  return {
    name: user.name,
    email: user.email,
    datetime: date,
  };
};


export { load, metadata };
