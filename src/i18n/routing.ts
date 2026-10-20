export const locales = ['en', 'pt-br'] as const;
export type Locale = typeof locales[number];
export const languageCookie = 'portfolio-language';

export function localeFromPath(path: string): Locale {
  return path.split('/')[1] === 'pt-br' ? 'pt-br' : 'en';
}

export function withoutLocale(path: string): string {
  return path.replace(/^\/(en|pt-br)(?=\/|$)/, '') || '/';
}

export function localizedPath(path: string, locale: Locale): string {
  const bare = withoutLocale(path);
  return `/${locale}${bare.startsWith('/') ? bare : `/${bare}`}`;
}
