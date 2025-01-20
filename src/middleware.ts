import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

export const middleware = createMiddleware(routing);

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};