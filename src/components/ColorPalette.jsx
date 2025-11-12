import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const colorPalettes = {
  neutral: {
    name: 'Neutral Grays',
    colors: [
      { name: '25', hex: '#FCFCFD', rgb: '252, 252, 253' },
      { name: '50', hex: '#F9FAFB', rgb: '249, 250, 251' },
      { name: '100', hex: '#F2F4F7', rgb: '242, 244, 247' },
      { name: '200', hex: '#EAECF0', rgb: '234, 236, 240' },
      { name: '300', hex: '#D0D5DD', rgb: '208, 213, 221' },
      { name: '400', hex: '#98A2B3', rgb: '152, 162, 179' },
      { name: '500', hex: '#667085', rgb: '102, 112, 133' },
      { name: '600', hex: '#475467', rgb: '71, 84, 103' },
      { name: '700', hex: '#344054', rgb: '52, 64, 84' },
      { name: '800', hex: '#1D2939', rgb: '29, 41, 57' },
      { name: '900', hex: '#101828', rgb: '16, 24, 40' }
    ]
  },
  primary: {
    name: 'Primary',
    colors: [
      { name: '25', hex: '#F5F8FF', rgb: '245, 248, 255' },
      { name: '50', hex: '#EFF4FF', rgb: '239, 244, 255' },
      { name: '100', hex: '#D1E0FF', rgb: '209, 224, 255' },
      { name: '200', hex: '#B2CCFF', rgb: '178, 204, 255' },
      { name: '300', hex: '#84ADFF', rgb: '132, 173, 255' },
      { name: '400', hex: '#528BFF', rgb: '82, 139, 255' },
      { name: '500', hex: '#2970FF', rgb: '41, 112, 255' },
      { name: '600', hex: '#155EEF', rgb: '21, 94, 239' },
      { name: '700', hex: '#004EEB', rgb: '0, 78, 235' },
      { name: '800', hex: '#0040C1', rgb: '0, 64, 193' },
      { name: '900', hex: '#00359E', rgb: '0, 53, 158' }
    ]
  },
  gray: {
    name: 'Neutral Cold',
    colors: [
      { name: '25', hex: '#FCFCFD', rgb: '252, 252, 253' },
      { name: '50', hex: '#F8F9FC', rgb: '248, 249, 252' },
      { name: '100', hex: '#EAECF5', rgb: '234, 236, 245' },
      { name: '200', hex: '#D5D9EB', rgb: '213, 217, 235' },
      { name: '300', hex: '#AFB5D9', rgb: '175, 181, 217' },
      { name: '400', hex: '#717BBC', rgb: '113, 123, 188' },
      { name: '500', hex: '#4E5BA6', rgb: '78, 91, 166' },
      { name: '600', hex: '#3E4784', rgb: '62, 71, 132' },
      { name: '700', hex: '#363F72', rgb: '54, 63, 114' },
      { name: '800', hex: '#293056', rgb: '41, 48, 86' },
      { name: '900', hex: '#101323', rgb: '16, 19, 35' }
    ]
  },
  blue: {
    name: 'Neon Blue',
    colors: [
      { name: '25', hex: '#F5FBFF', rgb: '245, 251, 255' },
      { name: '50', hex: '#F0F9FF', rgb: '240, 249, 255' },
      { name: '100', hex: '#E0F2FE', rgb: '224, 242, 254' },
      { name: '200', hex: '#B9E6FE', rgb: '185, 230, 254' },
      { name: '300', hex: '#7CD4FD', rgb: '124, 212, 253' },
      { name: '400', hex: '#36BFFA', rgb: '54, 191, 250' },
      { name: '500', hex: '#0BA5EC', rgb: '11, 165, 236' },
      { name: '600', hex: '#0086C9', rgb: '0, 134, 201' },
      { name: '700', hex: '#026AA2', rgb: '2, 106, 162' },
      { name: '800', hex: '#065986', rgb: '6, 89, 134' },
      { name: '900', hex: '#0A4A6B', rgb: '10, 74, 107' }
    ]
  },
  skyBlue: {
    name: 'Sky Blue',
    colors: [
      { name: '25', hex: '#F0FDFA', rgb: '240, 253, 250' },
      { name: '50', hex: '#ECFDF5', rgb: '236, 253, 245' },
      { name: '100', hex: '#D1FAE5', rgb: '209, 250, 229' },
      { name: '200', hex: '#A7F3D0', rgb: '167, 243, 208' },
      { name: '300', hex: '#6EE7B7', rgb: '110, 231, 183' },
      { name: '400', hex: '#34D399', rgb: '52, 211, 153' },
      { name: '500', hex: '#10B981', rgb: '16, 185, 129' },
      { name: '600', hex: '#059669', rgb: '5, 150, 105' },
      { name: '700', hex: '#047857', rgb: '4, 120, 87' },
      { name: '800', hex: '#065F46', rgb: '6, 95, 70' },
      { name: '900', hex: '#064E3B', rgb: '6, 78, 59' }
    ]
  },
  green: {
    name: 'Autumn Green',
    colors: [
      { name: '25', hex: '#FDFFF7', rgb: '253, 255, 247' },
      { name: '50', hex: '#F7FEEA', rgb: '247, 254, 234' },
      { name: '100', hex: '#EDFCCE', rgb: '237, 252, 206' },
      { name: '200', hex: '#D9F99D', rgb: '217, 249, 157' },
      { name: '300', hex: '#BEF264', rgb: '190, 242, 100' },
      { name: '400', hex: '#A3E635', rgb: '163, 230, 53' },
      { name: '500', hex: '#84CC16', rgb: '132, 204, 22' },
      { name: '600', hex: '#65A30D', rgb: '101, 163, 13' },
      { name: '700', hex: '#4D7C0F', rgb: '77, 124, 15' },
      { name: '800', hex: '#3F6212', rgb: '63, 98, 18' },
      { name: '900', hex: '#365314', rgb: '54, 83, 20' }
    ]
  },
  yellow: {
    name: 'Shades of Yellow',
    colors: [
      { name: '25', hex: '#FFFCF5', rgb: '255, 252, 245' },
      { name: '50', hex: '#FFFAEB', rgb: '255, 250, 235' },
      { name: '100', hex: '#FEF0C7', rgb: '254, 240, 199' },
      { name: '200', hex: '#FEDF89', rgb: '254, 223, 137' },
      { name: '300', hex: '#FEC84B', rgb: '254, 200, 75' },
      { name: '400', hex: '#FDB022', rgb: '253, 176, 34' },
      { name: '500', hex: '#F79009', rgb: '247, 144, 9' },
      { name: '600', hex: '#DC6803', rgb: '220, 104, 3' },
      { name: '700', hex: '#B54708', rgb: '181, 71, 8' },
      { name: '800', hex: '#93370D', rgb: '147, 55, 13' },
      { name: '900', hex: '#7A2E0E', rgb: '122, 46, 14' }
    ]
  },
  orange: {
    name: 'Peach Orange',
    colors: [
      { name: '25', hex: '#FFFAF5', rgb: '255, 250, 245' },
      { name: '50', hex: '#FFF4ED', rgb: '255, 244, 237' },
      { name: '100', hex: '#FFE6D5', rgb: '255, 230, 213' },
      { name: '200', hex: '#FFD6AE', rgb: '255, 214, 174' },
      { name: '300', hex: '#FF9C66', rgb: '255, 156, 102' },
      { name: '400', hex: '#FF692E', rgb: '255, 105, 46' },
      { name: '500', hex: '#FF4405', rgb: '255, 68, 5' },
      { name: '600', hex: '#E62E05', rgb: '230, 46, 5' },
      { name: '700', hex: '#BC1B06', rgb: '188, 27, 6' },
      { name: '800', hex: '#97180C', rgb: '151, 24, 12' },
      { name: '900', hex: '#771A0D', rgb: '119, 26, 13' }
    ]
  },
  red: {
    name: 'Cherry Red',
    colors: [
      { name: '25', hex: '#FFFBFA', rgb: '255, 251, 250' },
      { name: '50', hex: '#FEF3F2', rgb: '254, 243, 242' },
      { name: '100', hex: '#FEE4E2', rgb: '254, 228, 226' },
      { name: '200', hex: '#FECDCA', rgb: '254, 205, 202' },
      { name: '300', hex: '#FDA29B', rgb: '253, 162, 155' },
      { name: '400', hex: '#F97066', rgb: '249, 112, 102' },
      { name: '500', hex: '#F04438', rgb: '240, 68, 56' },
      { name: '600', hex: '#D92D20', rgb: '217, 45, 32' },
      { name: '700', hex: '#B42318', rgb: '180, 35, 24' },
      { name: '800', hex: '#912018', rgb: '145, 32, 24' },
      { name: '900', hex: '#7A271A', rgb: '122, 39, 26' }
    ]
  },
  pink: {
    name: 'Error',
    colors: [
      { name: '25', hex: '#FEF6FB', rgb: '254, 246, 251' },
      { name: '50', hex: '#FDF2FA', rgb: '253, 242, 250' },
      { name: '100', hex: '#FCE7F6', rgb: '252, 231, 246' },
      { name: '200', hex: '#FCCEEE', rgb: '252, 206, 238' },
      { name: '300', hex: '#FAA7E0', rgb: '250, 167, 224' },
      { name: '400', hex: '#F670C7', rgb: '246, 112, 199' },
      { name: '500', hex: '#EE46BC', rgb: '238, 70, 188' },
      { name: '600', hex: '#DD2590', rgb: '221, 37, 144' },
      { name: '700', hex: '#C11574', rgb: '193, 21, 116' },
      { name: '800', hex: '#9E165F', rgb: '158, 22, 95' },
      { name: '900', hex: '#851651', rgb: '133, 22, 81' }
    ]
  },
  emerald: {
    name: 'Success',
    colors: [
      { name: '25', hex: '#F6FEF9', rgb: '246, 254, 249' },
      { name: '50', hex: '#ECFDF3', rgb: '236, 253, 243' },
      { name: '100', hex: '#D1FADF', rgb: '209, 250, 223' },
      { name: '200', hex: '#A6F4C5', rgb: '166, 244, 197' },
      { name: '300', hex: '#6CE9A6', rgb: '108, 233, 166' },
      { name: '400', hex: '#32D583', rgb: '50, 213, 131' },
      { name: '500', hex: '#12B76A', rgb: '18, 183, 106' },
      { name: '600', hex: '#039855', rgb: '3, 152, 85' },
      { name: '700', hex: '#027A48', rgb: '2, 122, 72' },
      { name: '800', hex: '#05603A', rgb: '5, 96, 58' },
      { name: '900', hex: '#054F31', rgb: '5, 79, 49' }
    ]
  }
}

const ColorCard = ({ color }) => {
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      // می‌تونید اینجا یک toast notification اضافه کنید
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="group relative">
      <div 
        className="w-full h-16 rounded-lg border border-gray-200 shadow-sm cursor-pointer transition-all hover:scale-105 hover:shadow-md"
        style={{ backgroundColor: color.hex }}
        onClick={() => copyToClipboard(color.hex)}
        title={`کلیک کنید تا ${color.hex} کپی شود`}
      />
      <div className="mt-2 text-center">
        <div className="text-xs font-medium text-gray-900">{color.name}</div>
        <div 
          className="text-xs text-gray-500 font-mono cursor-pointer hover:text-gray-700"
          onClick={() => copyToClipboard(color.hex)}
        >
          {color.hex}
        </div>
      </div>
    </div>
  )
}

const ColorPalette = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="flex items-center gap-2"
            >
              ← برگشت
            </Button>
            <div></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Color Palette System
          </h1>
          <p className="text-lg text-gray-600">
            مجموعه کاملی از رنگ‌های طراحی سیستم
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(colorPalettes).map(([key, palette]) => (
            <Card key={key} className="overflow-hidden">
              <CardHeader className="bg-white border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">
                    {palette.name}
                  </CardTitle>
                  <Badge variant="secondary">
                    {palette.colors.length} رنگ
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-11 gap-4">
                  {palette.colors.map((color) => (
                    <ColorCard key={color.name} color={color} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6">
            <h3 className="text-lg font-semibold mb-2">نحوه استفاده</h3>
            <p className="text-gray-600 text-sm">
              روی هر رنگ کلیک کنید تا کد hex آن کپی شود
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette