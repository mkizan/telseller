import { Link } from "react-router-dom";
import CustomersListItem from "../CustomersListItem";

const CustomersList = () => {
  return (
    <>
      <button type="button" className="px-3 py-1 font-bold border">
        <Link to="/">Back</Link>
      </button>
      <ul>
        <li>
          <CustomersListItem />
        </li>
      </ul>
    </>
  );
};

export default CustomersList;
