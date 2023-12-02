import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import OrganizationsPage from "./components/pages/OrganizationsPage/OrganizationsPage";
import CustomersList from "./components/CustomersList";
import CustomersListItem from "./components/CustomersListItem";
import NewCustomer from "./components/CustomerForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="organizations" element={<OrganizationsPage />} />
        <Route path="customers" element={<CustomersList />} />
        <Route path="customer/:id" element={<CustomersListItem />} />
        <Route path="customer/create" element={<NewCustomer />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
