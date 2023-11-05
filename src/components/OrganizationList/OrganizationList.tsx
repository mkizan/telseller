import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { organizationsSelector } from "../../redux/referenceDirectories/organizations/organizationsSlice";
import { getOrganizationsThunk } from "../../redux/referenceDirectories/organizations/operations";
import OrganizationListItem from "../OrganizationListItem";
import { Link } from "react-router-dom";

const OrganizationList = () => {
  const { organizations } = useAppSelector(organizationsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrganizationsThunk());
  }, [dispatch]);

  return (
    <>
      <button type="button" className="px-3 py-1 font-bold border">
        <Link to="/">Back</Link>
      </button>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Префікс</th>
            <th>Назва організації</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((organization) => (
            <tr key={organization.id}>
              <OrganizationListItem
                prefix={organization.prefix}
                title={organization.title}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrganizationList;
