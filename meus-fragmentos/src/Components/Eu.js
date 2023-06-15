import Hello from './Hello';
import SouEu from './SouEu';
import Ocupacao from './Ocupacao';
import Estudando from './Estudando';
import Idade from './Idade';
import styles from './Eu.module.css'

function Eu({nome, idade, user, ocupacao, conteudo, tecnologia}) {
    return (
        <div className={styles.box}>
            <Hello nome={nome}></Hello>
            <Idade idade={idade}></Idade>
            <SouEu user={user}></SouEu>
            <Ocupacao ocupacao={ocupacao}></Ocupacao>
            <Estudando conteudo={conteudo} tecnologia={tecnologia}></Estudando>
        </div>
    );
};

export default Eu;