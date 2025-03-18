import { useState } from "react"

function App(){

  const [nome, setNome] = useState('ronaldo');
  return (
    <div>
      <h3>Pizarria 2A</h3>
    <input className="nome"
    name ="nome"
    placeholder="digite se nome..."
    onChange={(e)=>setNome(e.target.value)}
    type="text"/>
    <button onClick={()=>{alert(nome)}}>
     CLIQUE AQUI
     </button>
    </div>
  )
}

export default App