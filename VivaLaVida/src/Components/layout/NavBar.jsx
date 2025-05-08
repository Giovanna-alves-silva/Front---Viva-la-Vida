import { Outlet, Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={style.navbar}>
        <Link to='/'>
          <img className={style.logo} src="./logoVivaLaVida.svg" alt="Logo Viva La Vida" />
        </Link>

        <div>
          <ul className={style.listIcon}>
            <li>
              <img className={style.icons} src="./Search.svg" alt="Buscar" />
            </li>
            <li>
              <Link to='/cadastro'>
                <img className={style.icons} src="./Profile.svg" alt="Perfil" />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <img className={style.icons} src="./Home.svg" alt="Início" />
              </Link>
            </li>
          </ul>

          <ul className={style.list}>
            <li className={style.item}>
              <Link to='/'>Home</Link>
            </li>

            <li className={style.item}>
              <Link to='/cardapio'>Cardápio</Link>
            </li>

            <li className={style.item}>
              <Link to='/promocoes'>Promoções</Link>
            </li>
            <li className={style.item}>
              <Link to='/unidades'>Unidades</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
