import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { customersSelector } from "../../redux/referenceDirectories/customers/customersSlice";
import { useEffect } from "react";
import { getCustomersThunk } from "../../redux/referenceDirectories/customers/operations";

const CustomersList = () => {
  const { customers } = useAppSelector(customersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCustomersThunk());
  }, [dispatch]);

  return (
    <div className="relative h-full">
      <button type="button" className="px-3 py-1 font-bold border mb-2">
        <Link to="../">Back</Link>
      </button>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link to={`../customer/${customer.id}`}>{customer.name}</Link>
            <p>
              {customer.contacts?.address?.city},{" "}
              {customer.contacts?.address?.street},{" "}
              {customer.contacts?.address?.build}
            </p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="absolute inline-block bottom-0 right-0 px-4 py-2 rounded-[50%] bg-bgPrimary text-primary font-bold"
      >
        +
      </button>
    </div>
  );
};

export default CustomersList;
