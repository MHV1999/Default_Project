// src/router/PageRouter.jsx
import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "../layout";

// lazy load صفحات برای code-splitting
const Home = lazy(() => import("../pages/home/home"));
const Test = lazy(() => import("../pages/test/test"));
// const StorePage = lazy(() => import("../pages/StorePage"));

// مثال ساده از یک محافظ (auth guard)
const RequireAuth = ({ children }) => {
  // به عنوان مثال، اعتبارسنجی ساده با localStorage
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

console.log("RequireAuth = ", RequireAuth);


// fallback کامپوننت موقع بارگذاری lazy
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-2"></div>
      <p className="text-neutral-600 font-iran-sans">در حال بارگذاری...</p>
    </div>
  </div>
);

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout باید شامل <Outlet /> باشد تا children رندر شود
      errorElement: (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-900 font-iran-sans mb-2">404</h1>
            <p className="text-neutral-600 font-iran-sans">صفحه موردنظر پیدا نشد</p>
          </div>
        </div>
      ),
      children: [
        // Index route → مسیر پایه را به Home نگاشت می‌کند
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        // هم آدرس /home را به index/صفحهٔ اصلی وصل می‌کنیم (اختیاری)
        {
          path: "home",
          element: <Navigate to="/" replace />,
        },
        {
          path: "store",
          element: (
            <Suspense fallback={<Loading />}>
              {/* اگر بخواهید این صفحه محافظت‌شده باشد: element: <RequireAuth><StorePage/></RequireAuth> */}
              <Test />
            </Suspense>
          ),
        },
        // {
        //   path: "product/:id",
        //   element: (
        //     <Suspense fallback={<Loading />}>
        //       <ProductPage />
        //     </Suspense>
        //   ),
        //   // اگر می‌خواهید هنگام رفتن به این مسیر دیتا از سرور بگیرید می‌توانید loader اضافه کنید
        //   // loader: async ({ params }) => fetch(`/api/products/${params.id}`)
        // },
      ],
    },
    // صفحهٔ لاگین بیرون از لایهٔ اصلی (یا می‌تواند child هم باشد)
    // {
    //   path: "/login",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <Login />
    //     </Suspense>
    //   ),
    // },
    // fallback برای مسیرهای نامشخص (اختیاری)
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default PageRouter;
