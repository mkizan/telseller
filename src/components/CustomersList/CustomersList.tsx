import { Link } from "react-router-dom";
import { useGetCustomersQuery } from "../../redux/api/customersApi";
import { useTranslation } from "react-i18next";

const CustomersList = () => {
  const { t } = useTranslation();
  const { data: customers, isLoading, isError } = useGetCustomersQuery();
  return (
    <div className="relative h-full">
      <Link to="../" className="inline-block px-3 py-1 font-bold border mb-2">
        Back
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
