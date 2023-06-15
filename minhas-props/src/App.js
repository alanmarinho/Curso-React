import './App.css';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
        <Hello nome="Alan" user="alanmarinho" idade="21" tecnologia="React" profissao="Estudante" conteudo="Props"/>
        <Hello nome="Alan2" user="alanmarinho" idade="21" tecnologia="React" profissao="Estudante" conteudo="CSS module/geral"/>
    </div>
  );
}

export default App;
