type TProps = {
  title: string;
  img: string;
};

const NavbarItem = ({ title, img }: TProps) => (
  <li className="py-4 px-6 font-[500] uppercase">
    <span>{img}</span>
    <a href="#">{title}</a>
  </li>
);

export default NavbarItem;
