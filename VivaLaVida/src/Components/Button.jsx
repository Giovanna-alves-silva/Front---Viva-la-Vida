import { Link } from 'react-router-dom';
import styles from './Button.module.css'

const Button2=({label, router, cod_item}) => {
    return(
        <div className={styles.buttonContainer}>

            <Link to={`${router}${cod_item}`}>
                <button>{label}</button>
            </Link>

        </div>
    )
}

export default Button2;