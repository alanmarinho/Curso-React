import PropTypes from 'prop-types'
import Hello from '../hello/Hello'
import Eu from '../eu/Eu'
import Ocupacao from '../ocupacao/Ocupacao'
import Estudando from '../estudando/Estudando'
import styles from './Card.module.css'
function Card ({nome, idade, user, conteudo, tecnologia, ocupacao}){
    return(
        <div className={styles.main}>
            <Hello nome={nome} idade={idade}/>
            <Eu user={user}/>
            <Ocupacao ocupacao={ocupacao}/>
            <Estudando tecnologia={tecnologia} conteudo={conteudo}/>
        </div>
    );
};

Card.propTypes ={
    nome: PropTypes.string,
    user: PropTypes.string,
    conteudo: PropTypes.string,
    tecnologia: PropTypes.string,
    ocupacao: PropTypes.string,
    idade: PropTypes.number
}

Card.defaultProps ={
    nome: "N/A",
    conteudo: "N/A",
    tecnologia: "N/A",
    ocupacao: "N/A",
    idade: 0
}

export default Card;