import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";

import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />

        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;