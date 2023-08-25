import style from "./navbar.module.scss";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <h1>Audiophile</h1>
      </div>
      <ul className={style.list}>
        <li>Home</li>
        <li>Headphones</li>
        <li>Speaker</li>
        <li>Earphone</li>
      </ul>
      <div className={style.icon}>
        <Icon icon={`ion:cart-outline`} />
      </div>
    </nav>
  );
};

export default Navbar;
