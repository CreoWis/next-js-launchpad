import createMiddleware from 'next-intl/middleware';
import { routing } from './navigation';

export const middleware = createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(en)/:path*',
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|logos|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};