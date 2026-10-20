import * as en from '../data/site';
import * as pt from './pt-br';
import { ui } from './ui';
import { localizedPath, type Locale } from './routing';

export function getContent(locale: Locale) {
  const content = locale === 'pt-br' ? pt : en;
  return {
    ...content,
    ui: ui[locale],
    practices: content.practices.map(practice => ({ ...practice, href: localizedPath(practice.href, locale) })),
  };
}
