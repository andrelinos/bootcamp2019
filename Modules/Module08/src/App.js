import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);

  const [newTech, setNewTech] = useState('');

  /** useCallback impede que a função seja sempre recriada na memória ao ser executada */
  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  /** Este hook executa uma única vez / carrega as techs */
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    /*  return () => {}; // adiciona ou remove função após o componente ser executado */
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  /** Executa somente se a variável tech for alterada */
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias </strong>
      <br />
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
