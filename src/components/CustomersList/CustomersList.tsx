import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { customersSelector } from "../../redux/customers/customersSlice";
import { useEffect } from "react";
import { getCustomersThunk } from "../../redux/customers/operations";

const CustomersList = () => {
  const { customers } = useAppSelector(customersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomersThunk());
  }, [dispatch]);

  return (
    <div className="relative h-full">
      <Link to="../" className="inline-block px-3 py-1 font-bold border mb-2">
        Back
      </Link>
      <ul>
        {customers.map((customer) => (
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
