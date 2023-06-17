import styles from "./Inputs.module.css";
import EsqueciSenha from '../esqueciSenha/EsqueciSenha'
import Olho from "../olho/Olho";

function Inputs() {
    
    return (
        <form metode="post" className={styles.form}>
            <div className={styles.form_input}>
                <input className={styles.input} type="text" required></input>
                <span className={styles.span}></span>
                <label className={styles.label}>Usuário</label>

            </div>
            <div className={styles.form_input}>
                <div className={styles.password}>
                    <input className={styles.Pinput} type="password" id="password" required></input>
                    <span className={styles.Pspan}></span>
                    <label className={styles.Plabel}>Senha</label>
                    <Olho id="password"/>
                </div>
            </div>
            <EsqueciSenha />
            <input className={styles.submit} type="submit" value="Vamos nessa!"></input>

        </form>
    );
}

export default Inputs;