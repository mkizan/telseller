interface IProps {
  onNavbar: () => void;
}

const Navbar = ({ onNavbar }: IProps) => (
  <>
    <nav className="flex absolute w-full h-[100vh] top-0 px-1 bg-bgMain">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="mt-10 text-3xl text-accent font-bold">TelSeller</h2>

        <h3 className="hidden text-xl font-bold">Довідники</h3>
        <ul className="flex flex-col w-full items-center mt-7">
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">організації</a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">контрагенти</a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">номенклатура</a>
          </li>
        </ul>
        <h3 className="hidden text-xl font-bold">Документи</h3>
        <ul className="flex flex-col w-full items-center mt-1 border-t-2 border-accent">
          <li className="py-5 px-6 font-[500] uppercase">
            <a href="#" className="">
              замовлення
            </a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">каса</a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">борги</a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">реалізації</a>
          </li>
          <li className="py-4 px-6 font-[500] uppercase">
            <a href="#">надходження/повернення</a>
          </li>
        </ul>

        <button
          type="button"
          className="flex flex-col items-center py-7 px-7"
          onClick={onNavbar}
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

export default Navbar;
