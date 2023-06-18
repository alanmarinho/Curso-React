import PropTypes from 'prop-types'
import styles from './GithubImg.module.css'

function GitHubImg({ user }) {
    const url = `https://github.com/${user}.png`
    return (
        <>
            <img src={url} alt={user} className={styles.img}></img>
        </>
    );
};

GitHubImg.propTypes = {
    user: PropTypes.string
}

GitHubImg.defaultProps = {
    user: "github"
}

export default GitHubImg;

