import { Outlet, Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    return(
        <>
            <nav className={style.navbar}>

                <ul className={style.list}> 

                    <Link to='/'>
                        <li className={style.item}> <img className={style.logo} src="./logo.png"></img></li> {/*home_img*/}
                    </Link>

                    <Link to='/'>
                        <li className={style.item}> HOME </li> {/*home*/}
                    </Link>
                    
                    <Link to='/cardapio'>
                        <li className={style.item}> CARDÁPIO</li> {/*cardapio*/}
                    </Link>

                    <Link to='/promocoes'>
                        <li className={style.item}>PROMOÇÕES </li> {/*promoções*/}
                    </Link>

                    <Link to='/unidades'>
                        <li className={style.item}>UNIDADES </li> {/*unidades*/}
                    </Link>

                </ul>


            </nav>

            <Outlet />
        </>
    )
}

export default NavBar