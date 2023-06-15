import './App.css';
import Eu from './Components/Eu';

function App() {
  return (
    <div className="App">
      <h1 className="titulo"> Usando Fragmentos</h1>
      <Eu nome = "Alan" idade = "21" user = "alanmarinho" ocupacao = "Estudante" conteudo = "Fragmentos" tecnologia = "React"></Eu>
      <Eu nome = "Alan2" idade = "21" user = "alanmarinho" ocupacao = "Estudante" conteudo = "Fragmentos" tecnologia = "React"></Eu>
    </div>
  );
}

export default App;
