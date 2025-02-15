import { Link } from "react-router-dom";
import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../../redux/api/customersApi";
import { useTranslation } from "react-i18next";

const CustomersList = () => {
  const { t } = useTranslation();
  const { data: customers, isLoading, isError } = useGetCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();

  return (
    <div className="relative h-full">
      <Link to="../" className="inline-block px-3 py-1 font-bold border mb-2">
        {t("ns:text.navigation.back")}
      </Link>
      {isError && <div>{t("ns:error.message.loading")}</div>}
      {isLoading && <div>{t("ns:text.status.loading")}</div>}
      <ul>
        {customers?.map((customer) => (
          <li key={customer.id}>
            <Link to={`../customer/${customer.id}`}>
              {customer.firstName} {customer.lastName}
            </Link>
            <p>
              {customer?.city}, {customer?.street}, {customer?.build}
            </p>
            <button
              className="px-2 py-0.5 rounded bg-red-500"
              onClick={() => deleteCustomer(customer.id)}
            >
              {t("ns:button.editCustomer")}
            </button>
            <button
              className="px-2 py-0.5 rounded bg-red-500"
              onClick={() => deleteCustomer(customer.id)}
            >
              {t("ns:button.deleteCustomer")}
            </button>
          </li>
        ))}
      </ul>
      <Link
        to="/customer/create"
        className="absolute inline-block bottom-0 right-0 px-4 py-2 rounded-[50%] bg-bgPrimary text-primary font-bold"
      >
        +
      </Link>
    </div>
  );
};

export default CustomersList;
