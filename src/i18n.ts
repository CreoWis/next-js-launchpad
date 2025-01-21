import { getRequestConfig } from 'next-intl/server';
import { routing } from './navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale; // Fallback to default locale
  }

  // Load messages for the current locale
  const messages = (await import(`../content/${locale}.json`)).default;

  return {
    locale, // Return the validated locale
    messages,
  };
});
