import styles from './GithubImg.module.css'

function GitHubImg({ user }) {
    const url = `https://github.com/${user}.png`
    return (
        <>
            <img src={url} alt={user} clasName={styles.img}></img>
        </>
    );
};

export default GitHubImg;