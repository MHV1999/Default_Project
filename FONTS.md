# راهنمای استفاده از فونت‌ها

این پروژه شامل فونت فارسی IRANSansXFaNum است که به صورت کامل پیکربندی شده.

## فونت‌های موجود

### IRANSansXFaNum
فونت اصلی پروژه که شامل وزن‌های مختلف است:

- **Light (300)** - نازک
- **Regular (400)** - معمولی  
- **Medium (500)** - متوسط
- **Bold (700)** - ضخیم

## نحوه استفاده

### در Tailwind CSS

```jsx
// استفاده از فونت پیش‌فرض (IRANSansXFaNum)
<div className="font-iran-sans">متن فارسی</div>

// استفاده از وزن‌های مختلف
<div className="font-iran-sans font-light">متن نازک</div>
<div className="font-iran-sans font-normal">متن معمولی</div>
<div className="font-iran-sans font-medium">متن متوسط</div>
<div className="font-iran-sans font-bold">متن ضخیم</div>
```

### در CSS مستقیم

```css
.my-text {
  font-family: 'IRANSansXFaNum', 'Tahoma', 'Arial', sans-serif;
  font-weight: 400; /* Regular */
}

.my-bold-text {
  font-family: 'IRANSansXFaNum', 'Tahoma', 'Arial', sans-serif;
  font-weight: 700; /* Bold */
}
```

## تنظیمات پیش‌فرض

- **فونت پیش‌فرض:** IRANSansXFaNum
- **جهت متن:** راست به چپ (RTL)
- **فونت‌های پشتیبان:** Tahoma, Arial, sans-serif
- **بهینه‌سازی:** font-display: swap برای بارگذاری سریع‌تر

## فرمت‌های پشتیبانی شده

1. **WOFF2** - مدرن‌ترین و کوچک‌ترین فرمت
2. **WOFF** - پشتیبانی از مرورگرهای قدیمی‌تر
3. **TTF** - پشتیبانی کامل از همه مرورگرها

## مثال‌های عملی

### کامپوننت React با فونت فارسی

```jsx
function PersianComponent() {
  return (
    <div className="font-iran-sans text-right">
      <h1 className="text-2xl font-bold mb-4">
        عنوان اصلی
      </h1>
      <p className="text-base font-normal leading-relaxed">
        این یک متن نمونه به زبان فارسی است که با فونت IRANSansXFaNum نمایش داده می‌شود.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded font-medium">
        دکمه فارسی
      </button>
    </div>
  )
}
```

### ترکیب فونت فارسی و انگلیسی

```jsx
function MixedLanguageComponent() {
  return (
    <div className="font-iran-sans">
      <h1 className="text-xl font-bold">
        عنوان فارسی - English Title
      </h1>
      <p className="text-sm">
        متن فارسی همراه با English text در یک جمله
      </p>
    </div>
  )
}
```

## نکات مهم

1. **RTL Support:** پروژه به صورت پیش‌فرض از راست به چپ تنظیم شده
2. **Performance:** فونت‌ها با font-display: swap بهینه شده‌اند
3. **Fallback:** در صورت عدم بارگذاری فونت اصلی، از Tahoma استفاده می‌شود
4. **Cross-browser:** تمام مرورگرهای مدرن پشتیبانی می‌شوند

## اضافه کردن فونت جدید

برای اضافه کردن فونت جدید:

1. فایل‌های فونت را در `src/assets/Fonts/` قرار دهید
2. @font-face را در `src/index.css` تعریف کنید
3. فونت را در `tailwind.config.js` اضافه کنید

```css
/* در src/index.css */
@font-face {
  font-family: "NewFont";
  src: url("./assets/Fonts/NewFont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

```js
// در tailwind.config.js
fontFamily: {
  'new-font': ['NewFont', 'sans-serif'],
}
```