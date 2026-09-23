# afrashop — فروشگاه دیجیتال با Next.js

این پروژه یک frontend ماژولار با Next.js App Router و TypeScript است. مسیرهای اصلی در `app/`، کامپوننت‌های reusable در `components/`، داده‌های mock در `data/` و تایپ‌ها/ثابت‌ها در `types/` و `constants/` قرار دارند.

## اجرای پروژه

```bash
npm install
npm run dev
```

سپس `http://localhost:3000` را باز کن. برای production از `npm run build` و `npm start` استفاده کن.

## SEO و deploy

- metadata کامل، canonical، Open Graph و Twitter Card در layout و routeها تنظیم شده‌اند.
- `sitemap.xml` و `robots.txt` با convention داخلی Next.js تولید می‌شوند.
- OG image عمومی، محصول و مقاله از مسیرهای `opengraph-image` ساخته می‌شوند.
- تنظیمات دامنه و mockهای پروژه در [DEPLOYMENT.md](./DEPLOYMENT.md) توضیح داده شده‌اند.

## فایل‌های prototype قدیمی

نسخه‌ی قابل deploy پروژه همین Next.js App Router است؛ فایل‌های static prototype قدیمی در build استفاده نمی‌شوند.
