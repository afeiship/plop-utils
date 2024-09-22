import fg from 'fast-glob';

const load = async (pattern: string | string[], plop: any) => {
  const templates = await fg(pattern, { absolute: true });
  for (const template of templates) {
    const generator = await import(template);
    generator.default(plop);
  }
};


export { load };
