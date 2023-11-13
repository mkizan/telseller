import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./components/pages/Home";
import OrganizationsPage from "./components/pages/OrganizationsPage/OrganizationsPage";
import CustomersList from "./components/CustomersList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="organizations" element={<OrganizationsPage />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
