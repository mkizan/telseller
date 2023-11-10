import { NavLink } from "react-router-dom";
import {
  navbarSelector,
  setToggleNavbar,
} from "../../redux/navbar/navbarSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type TProps = {
  path: string;
  title: string;
};

const ReferenceDirectoriesListItem = ({ path, title }: TProps) => {
  const { toggleNavbar } = useAppSelector(navbarSelector);
  const dispatch = useAppDispatch();

  return (
    <NavLink
      to={path}
      className="mx-1"
      onClick={() => dispatch(setToggleNavbar(!toggleNavbar))}
    >
      {title}
    </NavLink>
  );
};

export default ReferenceDirectoriesListItem;
