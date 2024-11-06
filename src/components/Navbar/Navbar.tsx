// import { RiBuilding4Line } from "react-icons/ri";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdOutlinePeopleAlt } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  navbarSelector,
  setToggleNavbar,
} from "../../redux/navbar/navbarSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const { toggleNavbar } = useAppSelector(navbarSelector);

  const dispatch = useAppDispatch();

  return (
    <>
      <nav className="flex absolute w-full h-[100vh] top-0 px-1 bg-bgMain">
        <div className="w-full flex flex-col justify-center items-center">
          <h2 className="mt-10 text-3xl text-accent font-bold">TelSeller</h2>

          <h3 className="hidden text-xl font-bold">
            {t("ns:text.title.referenceDirectories")}
          </h3>
          {/* render reference directories */}
          <ul className="flex flex-col w-full items-center mt-7">
            <li className="flex items-center py-4 px-6 font-[500] uppercase">
              <NavLink to="organizations">
                {t("ns:text.title.organizations")}
              </NavLink>
            </li>
            <li className="flex items-center py-4 px-6 font-[500] uppercase">
              {t("ns:text.title.customers")}
            </li>
            <li className="flex items-center py-4 px-6 font-[500] uppercase">
              {t("ns:text.title.nomenclature")}
            </li>
          </ul>

          <h3 className="hidden text-xl font-bold">
            {t("ns:text.title.documents")}
          </h3>
          {/* render documents */}
          <ul className="flex flex-col w-full items-center mt-1 border-t-2 border-accent">
            <li className="py-5 px-6 font-[500] uppercase">
              <a href="#" className="">
                {t("ns:text.title.customerOrder")}
              </a>
            </li>
            <li className="py-4 px-6 font-[500] uppercase">
              <a href="#">{t("ns:text.title.cashDocuments")}</a>
            </li>
            <li className="py-4 px-6 font-[500] uppercase">
              <a href="#">{t("ns:text.title.debts")}</a>
            </li>
            <li className="py-4 px-6 font-[500] uppercase">
              <a href="#">{t("ns:text.title.salesTransaction")}</a>
            </li>
            <li className="py-4 px-6 font-[500] uppercase">
              <a href="#">{t("ns:text.title.receiptReturn")}</a>
            </li>
          </ul>

          <button
            type="button"
            className="flex flex-col items-center py-7 px-7"
            onClick={() => dispatch(setToggleNavbar(!toggleNavbar))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
