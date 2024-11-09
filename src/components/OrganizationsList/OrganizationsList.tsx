import OrganizationsListItem from "../OrganizationsListItem";
import { Link } from "react-router-dom";
import { useGetOrganizationsQuery } from "../../redux/api/organiationsApi";
import { useTranslation } from "react-i18next";

const OrganizationsList = () => {
  const { t } = useTranslation();
  const {
    data: organizations,
    isLoading,
    isError,
  } = useGetOrganizationsQuery();

  return (
    <>
      {isError && <div>{t("ns:error.message.loading")}</div>}
      {isLoading && <div>{t("ns:text.status.loading")}</div>}
      <button type="button" className="px-3 py-1 font-bold border">
        <Link to="/">Back</Link>
      </button>
      <h3 className="text-center">{t("ns:text.title.organizations")}</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th>{t("ns:text.columnTitle.org.prefix")}</th>
            <th>{t("ns:text.columnTitle.org.name")}</th>
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
