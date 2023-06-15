import GitHubImg from "./GitHubImg"
import styles from "./Hello.module.css"

function Hello({nome, idade, profissao, conteudo, tecnologia, user}){
    return (
        <div className={styles.HelloContainer}>
            <h1>Hello!</h1>
            <p>Meu nome é {nome}</p>
            <p>Tenho {idade} anos de idade</p>
            <p>E esse sou eu :)</p>
            <GitHubImg user={user} nome={nome}/>
            <p>Atualmente sou {profissao}</p>
            <p>E estou aprendendo {conteudo} em {tecnologia}</p>

        </div>
    )
}

export default Hello