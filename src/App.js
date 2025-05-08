import { useState } from 'react';
import './App.css';

function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
    setTarefa('');
  };

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas 📝</h1>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((t, index) => (
          <li key={index} style={{ textDecoration: t.concluida ? 'line-through' : 'none' }}>
            {t.texto}
            <button onClick={() => alternarStatus(index)}>
              {t.concluida ? 'Desfazer' : 'Concluir'}
            </button>
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
