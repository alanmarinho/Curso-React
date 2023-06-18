import Card from './components/card/Card'
import './App.css';

function App() {
  return (
    <div className="App">
        <Card nome="Alan" idade={21} user="alanmarinho" conteudo="Prop Types" tecnologia="React" ocupacao="Estudante" />
        <Card />
        <Card />
        <Card />
    </div>
  );
}

export default App; 
