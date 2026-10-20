import { languageCookie } from './routing';

export function setupLanguageSwitcher() {
  document.addEventListener('click', event => {
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[data-language]') : null;
    if (!link || !['en', 'pt-br'].includes(link.dataset.language || '')) return;
    const language = link.dataset.language!;
    document.cookie = `${languageCookie}=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
    const destination = new URL(link.href);
    destination.search = location.search;
    destination.hash = location.hash;
    link.href = destination.href;
  });
}
