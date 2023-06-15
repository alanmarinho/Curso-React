import styles from './GitHubImg.module.css';

function GitHubImg({user, nome}){

    const url = `https://github.com/${user}.png`
    
    return(
    <div>
        <img src={url} alt={nome} className={styles.GitHubImg} />
    </div>
    )
}

export default GitHubImg