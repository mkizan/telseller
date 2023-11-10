// import { FiShoppingBag } from "react-icons/fi";
// import { MdOutlinePeopleAlt } from "react-icons/md";
import { referenceDirectoriesListSelector } from "../../redux/referenceDirectories/referenceDirectoriesList/referenceDirectoriesListSlice";
import { useAppSelector } from "../../redux/hooks";
import ReferenceDirectoriesListItem from "../ReferenceDirectoriesListItem";

const ReferenceDirectoriesList = () => {
  const { referenceDirectoriesList } = useAppSelector(
    referenceDirectoriesListSelector
  );

  return (
    <ul className="flex flex-col w-full items-center mt-7">
      {referenceDirectoriesList.map(({ id, title, route }) => (
        <li
          key={id}
          className="flex items-center py-4 px-6 font-[500] uppercase"
        >
          <ReferenceDirectoriesListItem title={title} path={route} />
        </li>
      ))}
    </ul>
  );
};

export default ReferenceDirectoriesList;
