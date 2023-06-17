import Header from "../header/Header";
import Inputs from "../inputs/Inputs";
import Cadastrar from "../cadastrar/Cadastrar";
import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles.login}>
            <Header />
            <Inputs />
            <Cadastrar/>
        </div>
    );
}

export default Login;