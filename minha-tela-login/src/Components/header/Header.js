import styles from './Header.module.css';

function Header(){
    return(
        <div>
            <h1 className={styles.h1}>Bem vindo!</h1>
        </div>
    );
}

export default Header;