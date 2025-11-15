# Default Project Template

پروژه پایه React با Tailwind CSS، shadcn/ui و فونت فارسی

## ویژگی‌های نصب شده

✅ **React 19.2.0 + Vite 7.2.2** - فریمورک و build tool  
✅ **Tailwind CSS v3.4** - فریمورک CSS  
✅ **shadcn/ui** - کامپوننت‌های آماده UI  
✅ **PostCSS & Autoprefixer** - پردازش CSS  
✅ **فونت فارسی IRANSansXFaNum** - با 4 وزن مختلف  
✅ **سیستم رنگی کامل** - 11 خانواده رنگ با CSS variables  
✅ **پشتیبانی RTL** - راست به چپ برای فارسی  

## کامپوننت‌های آماده

- `Button` - دکمه‌های مختلف با استایل‌های متنوع
- `Card` - کارت‌ها و پنل‌ها  
- `Badge` - برچسب‌ها و تگ‌ها
- `FontShowcase` - نمایش فونت‌های مختلف

## اجرای پروژه

```bash
npm run dev
```

## اضافه کردن کامپوننت جدید

```bash
npx shadcn@latest add [component-name]
```

مثال:
```bash
npx shadcn@latest add input
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
```

## استفاده از کامپوننت‌ها

```jsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>کلیک کنید</Button>
      </CardContent>
    </Card>
  )
}
```

## کلاس‌های Tailwind مفید

- `bg-background` - پس‌زمینه اصلی
- `text-foreground` - متن اصلی  
- `text-muted-foreground` - متن کم‌رنگ
- `border-border` - حاشیه
- `bg-card` - پس‌زمینه کارت

## فونت‌های فارسی

پروژه شامل فونت IRANSansXFaNum با 4 وزن مختلف:
- Light (300) - نازک
- Regular (400) - معمولی
- Medium (500) - متوسط  
- Bold (700) - ضخیم

```jsx
<div className="font-iran-sans font-bold">متن فارسی ضخیم</div>
```

## سیستم رنگی

پروژه شامل 11 خانواده رنگ کامل با CSS variables:
- `neutral` - خاکستری خنثی
- `neutral-blue` - آبی خنثی
- `true-blue` - آبی واقعی
- `cherry-red` - قرمز گیلاسی
- `success` - سبز موفقیت
- و 6 رنگ دیگر...

## تم تیره/روشن

پروژه از CSS variables استفاده می‌کنه که تم تیره و روشن رو پشتیبانی می‌کنه.

## مستندات

- `COLORS.md` - راهنمای کامل رنگ‌ها
- `FONTS.md` - راهنمای کامل فونت‌ها