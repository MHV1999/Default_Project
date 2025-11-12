import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Card */}
        <Card className="border-neutral-200 shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-primary-50 to-neon-blue-50 rounded-t-lg">
            <CardTitle className="text-4xl font-bold text-neutral-900">
              Complete Color Palette System
            </CardTitle>
            <CardDescription className="flex items-center justify-center gap-2 text-neutral-600">
              تمام رنگ‌های پالت شما آماده استفاده است!
              <Badge className="bg-primary-500 text-white">کامل</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Color Examples */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">نمونه دکمه‌ها:</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={() => setCount(count + 1)}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                    size="lg"
                  >
                    Primary Button ({count})
                  </Button>
                  
                  <Button 
                    className="w-full bg-success-500 hover:bg-success-600 text-white"
                  >
                    Success Button
                  </Button>
                  
                  <Button 
                    className="w-full bg-cherry-red-500 hover:bg-cherry-red-600 text-white"
                  >
                    Cherry Red Button
                  </Button>
                  
                  <Button 
                    className="w-full bg-shades-yellow-500 hover:bg-shades-yellow-600 text-white"
                  >
                    Yellow Button
                  </Button>
                </div>
              </div>

              {/* Color Badges */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-800">نمونه برچسب‌ها:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary-100 text-primary-800 border-primary-200">Primary</Badge>
                  <Badge className="bg-success-100 text-success-800 border-success-200">Success</Badge>
                  <Badge className="bg-shades-yellow-100 text-shades-yellow-800 border-shades-yellow-200">Yellow</Badge>
                  <Badge className="bg-cherry-red-100 text-cherry-red-800 border-cherry-red-200">Cherry Red</Badge>
                  <Badge className="bg-error-100 text-error-800 border-error-200">Error</Badge>
                  <Badge className="bg-neon-blue-100 text-neon-blue-800 border-neon-blue-200">Neon Blue</Badge>
                </div>
                
                <div className="mt-6 p-4 bg-neutral-100 rounded-lg border border-neutral-200">
                  <h4 className="font-medium text-neutral-800 mb-2">نحوه استفاده:</h4>
                  <code className="text-sm text-neutral-600 bg-neutral-50 p-2 rounded block">
                    className="bg-primary-500 text-white"<br/>
                    className="bg-cherry-red-100 text-cherry-red-800"<br/>
                    className="border-success-200"
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Color Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'Neutral Grays', colors: 'bg-neutral-500', light: 'bg-neutral-100' },
            { name: 'Primary', colors: 'bg-primary-500', light: 'bg-primary-100' },
            { name: 'Neutral Cold', colors: 'bg-neutral-cold-500', light: 'bg-neutral-cold-100' },
            { name: 'Neutral Navy', colors: 'bg-neutral-navy-500', light: 'bg-neutral-navy-100' },
            { name: 'Neon Blue', colors: 'bg-neon-blue-500', light: 'bg-neon-blue-100' },
            { name: 'Sky Blue', colors: 'bg-sky-blue-500', light: 'bg-sky-blue-100' },
            { name: 'Autumn Green', colors: 'bg-autumn-green-500', light: 'bg-autumn-green-100' },
            { name: 'Shades Yellow', colors: 'bg-shades-yellow-500', light: 'bg-shades-yellow-100' },
            { name: 'Peach Orange', colors: 'bg-peach-orange-500', light: 'bg-peach-orange-100' },
            { name: 'Cherry Red', colors: 'bg-cherry-red-500', light: 'bg-cherry-red-100' },
            { name: 'Error', colors: 'bg-error-500', light: 'bg-error-100' },
            { name: 'Success', colors: 'bg-success-500', light: 'bg-success-100' },
          ].map((color) => (
            <Card key={color.name} className="overflow-hidden border-neutral-200">
              <div className={`h-16 ${color.colors}`}></div>
              <div className={`h-6 ${color.light}`}></div>
              <CardContent className="p-2">
                <p className="text-xs font-medium text-neutral-700 text-center">{color.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
