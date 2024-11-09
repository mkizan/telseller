import OrganizationsListItem from "../OrganizationsListItem";
import { Link } from "react-router-dom";
import { useGetOrganizationsQuery } from "../../redux/api/organiationsApi";

const OrganizationsList = () => {
  const {
    data: organizations,
    isLoading,
    isError,
  } = useGetOrganizationsQuery();

  return (
    <>
      {isError && <div>Error while loading organizations</div>}
      {isLoading && <div>Loading...</div>}
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
          {organizations?.map((organization) => (
            <tr key={organization.id}>
              <OrganizationsListItem
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

export default OrganizationsList;
