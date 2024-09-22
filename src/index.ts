import fg from 'fast-glob';

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


export { load };
