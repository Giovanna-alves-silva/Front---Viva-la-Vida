import { Outlet, Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <>
            <nav className={style.navbar}>

                <Link to='/'>
                    <img className={style.logo} src="./logoVivaLaVida.svg" alt="" />
                </Link>

                <div>

                    <ul className={style.listIcon}>
                        
                        <li ><img className={style.icons} src="./Search.svg" alt="" /></li>
                        
                        <Link to='/cadastro'>
                            <li ><img className={style.icons} src="./Profile.svg" alt="" /></li>
                        </Link>

                        <Link to='/'>
                            <li ><img className={style.icons} src="./Home.svg" alt="" /></li>
                        </Link>
                        
                    </ul>

                    <ul className={style.list}>
                        
                        <Link to='/'>
                           <li className={style.item}>Home</li>
                        </Link>

                        <Link to='/cardapio'>
                            <li className={style.item}>Cardápio</li>
                        </Link>
                        
                        <Link to='/promocoes'>
                            <li className={style.item}>Promoções</li>
                        </Link>
                        
                        <Link to='unidades'>
                                <li className={style.item}>Unidades</li>
                        </Link>
                        
                    </ul>

                </div>

            </nav>

            <Outlet />

        </>
    )
}

export default NavBar;