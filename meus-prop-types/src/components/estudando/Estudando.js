import ProtoTypes from 'prop-types'

function Estudando({conteudo, tecnologia}){
    return(
        <>
            <h3>Estou estudando {conteudo} em {tecnologia}</h3>
        </>
    );
}

Estudando.propTypes = {
    conteudo: ProtoTypes.string,
    tecnologia: ProtoTypes.string,
}

export default Estudando;