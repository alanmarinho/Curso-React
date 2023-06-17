import styles from "./Cadastrar.module.css";

function Cadastar(){
    return (
        <div className={styles.cadastro}>
            <span>Não possue cadastro?</span> <a href="#" className={styles.cadastrar}>Cadastrar-se</a>
        </div>
    
    );
}

export default Cadastar;