import i18n from "../../i18n";
import Navbar from "../Navbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  navbarSelector,
  setToggleNavbar,
} from "../../redux/navbar/navbarSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { toggleNavbar } = useAppSelector(navbarSelector);

  return (
    <>
      <header className="w-full h-[30px] py-5 flex bg-bgPrimary relative items-center">
        <button
          type="button"
          className="inline-flex mr-5"
          onClick={() => dispatch(setToggleNavbar(!toggleNavbar))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
        <h1 className="text-primary font-bold">TelSeller</h1>
        <div className="flex ml-auto align-middle">
          <button
            type="button"
            onClick={() => i18n.changeLanguage("en")}
            className="mr-2"
          >
            En
          </button>
          <button
            type="button"
            onClick={() => i18n.changeLanguage("uk")}
            className="before:content-['|'] before:mr-2 before:text-primary block mr-4 text-second"
          >
            Uk
          </button>
          <button type="button" className="inline-flex ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
          </button>
        </div>

        {toggleNavbar && <Navbar />}
      </header>
    </>
  );
};

export default Header;
