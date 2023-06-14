import './App.css';
import HelloWorld from './Components/HelloWord';
import Frase from './Components/Frase';

function App() {
  const name = "Alan"

  function toUpperCase(str){
    return str.toUpperCase();
  }

  function getImgPlaceholder(sizeX, sizeY = sizeX){
    return `https://via.placeholder.com/${sizeX}x${sizeY}`
  }

  function getImgGitHub(user){
    return `https://github.com/${user}.png`;
  }

  return (
    <div className="App">
      <h1>Olá Mundo!</h1>
      <h3>Essa é minha primeira página React.</h3>
      <h3>Meu nome é {toUpperCase(name)}</h3>
      <h3>E esse sou eu :)</h3>
      <img className="githubIMG" src={getImgGitHub('alanmarinho')} alt="imagem Guithub"></img>
      <div><img src={getImgPlaceholder(150,20)} alt="minha imagem"></img></div>
      <HelloWorld/>
      <Frase />
    </div>
  );
}

export default App;
