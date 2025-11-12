# راهنمای استفاده از پالت رنگی

این پروژه شامل یک سیستم رنگی کامل است که در Tailwind CSS تعریف شده.

## رنگ‌های موجود

### 🎨 primary Colors (رنگ‌های برند)
```css
bg-primary-25   /* #F5F8FF */
bg-primary-50   /* #EFF4FF */
bg-primary-100  /* #D1E0FF */
...
bg-primary-900  /* #00359E */
```

### 🔘 Neutral Colors (رنگ‌های خنثی)
```css
bg-neutral-25   /* #FCFCFD */
bg-neutral-50   /* #F9FAFB */
bg-neutral-100  /* #F2F4F7 */
...
bg-neutral-900  /* #101828 */
```

### ✅ Success Colors (رنگ‌های موفقیت)
```css
bg-success-25   /* #F6FEF9 */
bg-success-50   /* #ECFDF3 */
bg-success-100  /* #D1FADF */
...
bg-success-900  /* #054F31 */
```

### ❌ Error Colors (رنگ‌های خطا)
```css
bg-cherry-red-25   /* #FFFBFA */
bg-cherry-red-50   /* #FEF3F2 */
bg-cherry-red-100  /* #FEE4E2 */
...
bg-cherry-red-900  /* #7A271A */
```

### ⚠️ Warning Colors (رنگ‌های هشدار)
```css
bg-shades-yellow-25   /* #FFFCF5 */
bg-shades-yellow-50   /* #FFFAEB */
bg-shades-yellow-100  /* #FEF0C7 */
...
bg-shades-yellow-900  /* #7A2E0E */
```

### ℹ️ Info Colors (رنگ‌های اطلاعاتی)
```css
bg-neon-blue-25   /* #F5FBFF */
bg-neon-blue-50   /* #F0F9FF */
bg-neon-blue-100  /* #E0F2FE */
...
bg-neon-blue-900  /* #0A4A6B */
```

## نحوه استفاده

### پس‌زمینه (Background)
```jsx
<div className="bg-primary-500">primary Background</div>
<div className="bg-success-100">Light Success Background</div>
<div className="bg-cherry-red-50">Very Light Error Background</div>
```

### متن (Text)
```jsx
<p className="text-primary-600">primary Text</p>
<p className="text-success-700">Success Text</p>
<p className="text-cherry-red-800">Error Text</p>
```

### حاشیه (Border)
```jsx
<div className="border border-primary-200">primary Border</div>
<div className="border-2 border-success-300">Success Border</div>
<div className="border-l-4 border-cherry-red-500">Error Left Border</div>
```

### دکمه‌ها
```jsx
{/* Primary Button */}
<Button className="bg-primary-500 hover:bg-primary-600 text-white">
  Primary
</Button>

{/* Success Button */}
<Button className="bg-success-500 hover:bg-success-600 text-white">
  Success
</Button>

{/* Danger Button */}
<Button className="bg-cherry-red-500 hover:bg-cherry-red-600 text-white">
  Danger
</Button>

{/* Outline Button */}
<Button className="border border-primary-300 text-primary-700 hover:bg-primary-50">
  Outline
</Button>
```

### کارت‌ها و پنل‌ها
```jsx
{/* Info Card */}
<Card className="border-neon-blue-200 bg-neon-blue-50">
  <CardHeader className="bg-neon-blue-100">
    <CardTitle className="text-neon-blue-800">Info</CardTitle>
  </CardHeader>
  <CardContent className="text-neon-blue-700">
    محتوای اطلاعاتی
  </CardContent>
</Card>

{/* Success Card */}
<Card className="border-success-200 bg-success-50">
  <CardHeader className="bg-success-100">
    <CardTitle className="text-success-800">Success</CardTitle>
  </CardHeader>
</Card>
```

### برچسب‌ها (Badges)
```jsx
<Badge className="bg-primary-100 text-primary-800 border-primary-200">
  primary Badge
</Badge>

<Badge className="bg-success-100 text-success-800 border-success-200">
  Success Badge
</Badge>

<Badge className="bg-shades-yellow-100 text-shades-yellow-800 border-shades-yellow-200">
  Warning Badge
</Badge>
```

## رنگ‌های اضافی

### 🌸 Error (صورتی)
```css
bg-error-25 تا bg-error-900
```

### 🍑 Peach Orange (نارنجی هلویی)
```css
bg-peach-orange-25 تا bg-peach-orange-900
```

### 🌿 Autumn Green (سبز پاییزی)
```css
bg-autumn-green-25 تا bg-autumn-green-900
```

### 🌊 Sky Blue (آبی آسمانی)
```css
bg-sky-blue-25 تا bg-sky-blue-900
```

### 🔵 Neutral Cold (آبی خنثی)
```css
bg-neutral-cold-25 تا bg-neutral-cold-900
```

## نکات مهم

1. **سازگاری با تم تیره**: همه رنگ‌ها برای تم روشن بهینه شده‌اند
2. **دسترسی**: نسبت کنتراست رنگ‌ها مطابق استانداردهای WCAG است
3. **سازگاری**: با shadcn/ui و سایر کامپوننت‌ها سازگار است
4. **انعطاف**: می‌توانید رنگ‌های جدید اضافه کنید

## مثال کامل

```jsx
function ExampleComponent() {
  return (
    <div className="bg-neutral-50 min-h-screen p-8">
      <Card className="border-primary-200 shadow-lg">
        <CardHeader className="bg-primary-50 border-b border-primary-100">
          <CardTitle className="text-primary-800">عنوان</CardTitle>
          <Badge className="bg-success-100 text-success-800">فعال</Badge>
        </CardHeader>
        <CardContent className="p-6">
          <Button className="bg-primary-500 hover:bg-primary-600 text-white mr-2">
            تایید
          </Button>
          <Button className="bg-cherry-red-500 hover:bg-cherry-red-600 text-white">
            لغو
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
```