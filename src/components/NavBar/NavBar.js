import CartWidget from "./CartWidget";
import { navbar, logo, options } from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={navbar}>
      <div className={logo}>logo</div>
      <ul className={options}>
        <li>
          <a href="/#">Contacto</a>
        </li>
        <li>
          <a href="/#">Categorias</a>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
