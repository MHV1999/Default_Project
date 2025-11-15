import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const FontShowcase = () => {
  const fontWeights = [
    { name: 'نازک', weight: 'font-light', value: '300' },
    { name: 'معمولی', weight: 'font-normal', value: '400' },
    { name: 'متوسط', weight: 'font-medium', value: '500' },
    { name: 'ضخیم', weight: 'font-bold', value: '700' }
  ]

  const sampleTexts = [
    'سیستم طراحی کامل با فونت فارسی',
    'React + Vite + Tailwind CSS + shadcn/ui',
    'نمونه متن فارسی برای تست فونت IRANSansXFaNum',
    'این متن شامل اعداد فارسی ۱۲۳۴۵۶۷۸۹۰ و انگلیسی 1234567890 است'
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="font-iran-sans text-2xl">
            نمایش فونت IRANSansXFaNum
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Font Weights */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-iran-sans">وزن‌های مختلف فونت:</h3>
            <div className="space-y-3">
              {fontWeights.map((font) => (
                <div key={font.value} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <Badge variant="outline" className="font-iran-sans min-w-16">
                    {font.value}
                  </Badge>
                  <Badge variant="secondary" className="font-iran-sans min-w-16">
                    {font.name}
                  </Badge>
                  <p className={`font-iran-sans ${font.weight} text-lg flex-1`}>
                    نمونه متن با وزن {font.name} - Sample text with {font.name} weight
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Texts */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-iran-sans">نمونه متن‌ها:</h3>
            <div className="space-y-4">
              {sampleTexts.map((text, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-iran-sans text-base leading-relaxed text-right">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Size Examples */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-iran-sans">اندازه‌های مختلف:</h3>
            <div className="space-y-3">
              <p className="font-iran-sans text-xs">متن خیلی کوچک - text-xs</p>
              <p className="font-iran-sans text-sm">متن کوچک - text-sm</p>
              <p className="font-iran-sans text-base">متن معمولی - text-base</p>
              <p className="font-iran-sans text-lg">متن بزرگ - text-lg</p>
              <p className="font-iran-sans text-xl">متن خیلی بزرگ - text-xl</p>
              <p className="font-iran-sans text-2xl">متن عنوان - text-2xl</p>
              <p className="font-iran-sans text-3xl">عنوان اصلی - text-3xl</p>
            </div>
          </div>

          {/* Mixed Content */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-iran-sans">محتوای ترکیبی:</h3>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-iran-sans text-xl font-bold mb-2">
                عنوان فارسی - English Title
              </h4>
              <p className="font-iran-sans text-base leading-relaxed mb-3">
                این یک نمونه متن ترکیبی است که شامل کلمات فارسی و English words می‌باشد. 
                همچنین شامل اعداد فارسی ۱۲۳ و انگلیسی 123 است.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge className="font-iran-sans">برچسب فارسی</Badge>
                <Badge variant="outline" className="font-iran-sans">English Badge</Badge>
                <Badge variant="secondary" className="font-iran-sans">ترکیبی Mixed</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default FontShowcase