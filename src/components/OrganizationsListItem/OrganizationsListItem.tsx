type TProps = {
  prefix: string;
  title: string;
};

const OrganizationsListItem = ({ prefix, title }: TProps) => (
  <>
    <td>{prefix}</td>
    <td>{title}</td>
  </>
);

export default OrganizationsListItem;
