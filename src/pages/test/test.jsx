import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FontShowcase from "../../components/FontShowcase";

const test = () => {
    const [count, setCount] = useState(0);
    const [showFonts, setShowFonts] = useState(false);

    if (showFonts) {
        return (
            <div className="min-h-screen bg-white p-8">
                <div className="max-w-6xl mx-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <Button 
                        onClick={() => setShowFonts(false)}
                        variant="outline"
                        className="font-iran-sans"
                        >
                        ← برگشت به رنگ‌ها
                        </Button>
                    </div>
                    <FontShowcase />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white flex flex-col items-center justify-center p-8">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header Card */}
                <Card className="border-neutral-200 shadow-lg">
                <CardHeader className="text-center bg-gradient-to-r from-primary-50 to-neutral-cold-50 rounded-t-lg">
                    <CardTitle className="text-4xl font-bold text-neutral-cold-900 font-iran-sans">
                    سیستم پالت رنگی کامل
                    </CardTitle>
                    <CardDescription className="flex items-center justify-center gap-2 text-neutral-cold-600 font-iran-sans">
                    تمام رنگ‌های پالت شما آماده استفاده است!
                    <Badge className="bg-primary-500 text-white font-iran-sans">کامل</Badge>
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Color Examples */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-cold-800 font-iran-sans">
                        نمونه دکمه‌ها:
                        </h3>
                        <div className="space-y-3">
                        <Button
                            onClick={() => setCount(count + 1)}
                            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-iran-sans"
                            size="lg"
                        >
                            دکمه اصلی ({count})
                        </Button>

                        <Button className="w-full bg-success-500 hover:bg-success-600 text-white font-iran-sans">
                            دکمه موفقیت
                        </Button>

                        <Button className="w-full bg-peach-orange-500 hover:bg-peach-orange-600 text-white font-iran-sans">
                            دکمه هشدار
                        </Button>

                        <Button className="w-full bg-error-500 hover:bg-error-600 text-white font-iran-sans">
                            دکمه خطا
                        </Button>
                        
                        <Button 
                            onClick={() => setShowFonts(true)}
                            variant="outline" 
                            className="w-full font text-white bg-neutral-cold-500"
                        >
                            مشاهده فونت‌ها
                        </Button>
                        </div>
                    </div>

                    {/* Color Badges */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-neutral-cold-800 font-iran-sans">
                        نمونه برچسب‌ها:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                        <Badge className="bg-primary-100 text-primary-800 border-primary-200 font-iran-sans">
                            اصلی
                        </Badge>
                        <Badge className="bg-success-100 text-success-800 border-success-200 font-iran-sans">
                            موفقیت
                        </Badge>
                        <Badge className="bg-neutral-cold-100 text-neutral-cold-800 border-neutral-cold-200 font-iran-sans">
                            خنثی سرد
                        </Badge>
                        <Badge className="bg-peach-orange-100 text-peach-orange-800 border-peach-orange-200 font-iran-sans">
                            نارنجی
                        </Badge>
                        <Badge className="bg-error-100 text-error-800 border-error-200 font-iran-sans">
                            خطا
                        </Badge>
                        </div>

                        <div className="mt-6 p-4 bg-neutral-cold-100 rounded-lg border border-neutral-cold-200">
                        <h4 className="font-medium text-neutral-cold-800 mb-2 font-iran-sans">
                            نحوه استفاده:
                        </h4>
                        <code className="text-sm text-neutral-cold-600 bg-neutral-cold-50 p-2 rounded block">
                            className="bg-primary-500 text-white"
                            <br />
                            className="bg-peach-orange-100 text-peach-orange-800"
                            <br />
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
                    {
                    name: "Primary",
                    c_1000: "bg-primary-1000",
                    c_900: "bg-primary-900",
                    c_800: "bg-primary-800",
                    c_700: "bg-primary-700",
                    c_600: "bg-primary-600",
                    c_500: "bg-primary-500",
                    c_400: "bg-primary-400",
                    c_300: "bg-primary-300",
                    c_200: "bg-primary-200",
                    c_100: "bg-primary-100",
                    c_50: "bg-primary-50",
                    c_25: "bg-primary-25",
                    },
                    {
                    name: "Neutral Cold",
                    c_1000: "bg-neutral-cold-1000",
                    c_900: "bg-neutral-cold-900",
                    c_800: "bg-neutral-cold-800",
                    c_700: "bg-neutral-cold-700",
                    c_600: "bg-neutral-cold-600",
                    c_500: "bg-neutral-cold-500",
                    c_400: "bg-neutral-cold-400",
                    c_300: "bg-neutral-cold-300",
                    c_200: "bg-neutral-cold-200",
                    c_100: "bg-neutral-cold-100",
                    c_50: "bg-neutral-cold-50",
                    c_25: "bg-neutral-cold-25",
                    },
                    {
                    name: "Success",
                    c_1000: "bg-success-1000",
                    c_900: "bg-success-900",
                    c_800: "bg-success-800",
                    c_700: "bg-success-700",
                    c_600: "bg-success-600",
                    c_500: "bg-success-500",
                    c_400: "bg-success-400",
                    c_300: "bg-success-300",
                    c_200: "bg-success-200",
                    c_100: "bg-success-100",
                    c_50: "bg-success-50",
                    c_25: "bg-success-25",
                    },
                    {
                    name: "Orange",
                    c_1000: "bg-peach-orange-1000",
                    c_900: "bg-peach-orange-900",
                    c_800: "bg-peach-orange-800",
                    c_700: "bg-peach-orange-700",
                    c_600: "bg-peach-orange-600",
                    c_500: "bg-peach-orange-500",
                    c_400: "bg-peach-orange-400",
                    c_300: "bg-peach-orange-300",
                    c_200: "bg-peach-orange-200",
                    c_100: "bg-peach-orange-100",
                    c_50: "bg-peach-orange-50",
                    c_25: "bg-peach-orange-25",
                    },
                    {
                    name: "Error",
                    c_1000: "bg-error-1000",
                    c_900: "bg-error-900",
                    c_800: "bg-error-800",
                    c_700: "bg-error-700",
                    c_600: "bg-error-600",
                    c_500: "bg-error-500",
                    c_400: "bg-error-400",
                    c_300: "bg-error-300",
                    c_200: "bg-error-200",
                    c_100: "bg-error-100",
                    c_50: "bg-error-50",
                    c_25: "bg-error-25",
                    },
                    
                ].map((color) => (
                    <Card
                    key={color.name}
                    className="overflow-hidden border-neutral-200"
                    >
                    <div className={`h-6 ${color.c_1000}`}></div>
                    <div className={`h-6 ${color.c_900}`}></div>
                    <div className={`h-6 ${color.c_800}`}></div>
                    <div className={`h-6 ${color.c_700}`}></div>
                    <div className={`h-6 ${color.c_600}`}></div>
                    <div className={`h-16 ${color.c_500}`}></div>
                    <div className={`h-6 ${color.c_400}`}></div>
                    <div className={`h-6 ${color.c_300}`}></div>
                    <div className={`h-6 ${color.c_200}`}></div>
                    <div className={`h-6 ${color.c_100}`}></div>
                    <div className={`h-6 ${color.c_50}`}></div>
                    <div className={`h-6 ${color.c_25}`}></div>

                    <CardContent className="p-2">
                        <p className="text-xs font-medium text-neutral-700 text-center font-iran-sans">
                        {color.name}
                        </p>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </div>
    );
}

export default test;