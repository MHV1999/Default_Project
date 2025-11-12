# Video Player React

پروژه React با Tailwind CSS و shadcn/ui

## نصب شده

✅ **Tailwind CSS v3.4** - برای styling  
✅ **shadcn/ui** - کامپوننت‌های آماده  
✅ **PostCSS & Autoprefixer** - پردازش CSS  

## کامپوننت‌های نصب شده

- `Button` - دکمه‌های مختلف
- `Card` - کارت‌ها و پنل‌ها  
- `Badge` - برچسب‌ها

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

## تم تیره/روشن

پروژه از CSS variables استفاده می‌کنه که تم تیره و روشن رو پشتیبانی می‌کنه.