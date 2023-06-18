import ProtoTypes from 'prop-types'

function Ocupacao({ocupacao}){
    return(
        <>
            <h3>Atualmente sou {ocupacao}</h3>
        </>
    );
}

Ocupacao.propType = {
    ocupacao: ProtoTypes.string,
}

export default Ocupacao;