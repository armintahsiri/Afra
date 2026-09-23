# Deployment notes

## Recommended hosting

Vercel is the recommended host for this Next.js App Router project. It supports the production build, dynamic OG image routes, `sitemap.xml`, and `robots.txt` without additional server configuration.

## Environment variables

Set this variable in the deployment environment:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

`NEXT_PUBLIC_SITE_URL` is used for `metadataBase`, canonical URLs, Open Graph URLs, Twitter cards, the sitemap, and the robots sitemap reference. Replace the example value with the real Afra Shop domain before going live. The current fallback is `https://afrashop.ir` so local builds remain environment-agnostic.

## Production commands

```bash
npm ci
npm run lint
npm run build
npm start
```

## Demo-only functionality

The following features are intentionally frontend mocks and must be connected to a trusted backend before a real launch:

- ZarinPal/payment processing and payment callbacks
- Authentication, passwords, sessions, and account security
- Cart persistence and order history
- Newsletter submission
- Stock-notification requests

No real API keys or payment credentials are included in this repository.

## Known limitations

Product and article Open Graph images currently use generated gradient placeholders because real photography is not available yet. Revisit these routes when real images exist; photography generally performs better for social-share click-through than generated graphics.
