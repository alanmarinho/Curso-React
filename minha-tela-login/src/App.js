import styles from "./App.css"
import Login from './Components/login/Login';

function App() {
  return (
    <div className={styles.App}>
      <Login/>
      <h3 className={styles.creditos}>Adaptado de <a href='https://youtu.be/eeHqZeJ9Vqc' target="_blank">CodingNepal</a></h3>
    </div>
  );
}

export default App;
