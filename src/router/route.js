// src/router/PageRouter.jsx
import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "../layout";

// lazy load صفحات برای code-splitting
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const ProductPage = lazy(() => import("../pages/productPage"));
const StorePage = lazy(() => import("../pages/StorePage"));

// مثال ساده از یک محافظ (auth guard)
const RequireAuth = ({ children }) => {
  // به عنوان مثال، اعتبارسنجی ساده با localStorage
  const isAuthenticated = Boolean(localStorage.getItem("token"));
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// fallback کامپوننت موقع بارگذاری lazy
const Loading = () => <div>در حال بارگذاری…</div>;

const PageRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Layout باید شامل <Outlet /> باشد تا children رندر شود
      errorElement: <div>صفحه موردنظر پیدا نشد (404)</div>,
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
              <StorePage />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductPage />
            </Suspense>
          ),
          // اگر می‌خواهید هنگام رفتن به این مسیر دیتا از سرور بگیرید می‌توانید loader اضافه کنید
          // loader: async ({ params }) => fetch(`/api/products/${params.id}`)
        },
      ],
    },
    // صفحهٔ لاگین بیرون از لایهٔ اصلی (یا می‌تواند child هم باشد)
    {
      path: "/login",
      element: (
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      ),
    },
    // fallback برای مسیرهای نامشخص (اختیاری)
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default PageRouter;
