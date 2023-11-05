type TProps = {
  prefix: string;
  title: string;
};

const OrganizationListItem = ({ prefix, title }: TProps) => (
  <>
    <td>{prefix}</td>
    <td>{title}</td>
  </>
);

export default OrganizationListItem;
