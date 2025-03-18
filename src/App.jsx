import { useState } from "react"

function App(){

  const [nome, setNome] = useState('ronaldo');

  const Formulario = () => {
    return (
      <>
      <h4>Formulario de inscrição</h4>
   <input className="nome"
       name ="nome"
       placeholder="digite se nome..."
       onChange={(e)=>setNome(e.target.value)}
       type="text"/>
    <button onClick={()=>{alert(nome)}}>
     CLIQUE AQUI
     </button>
</>
    )
  }
  return (
    <div>
      <h3>Pizarria 2A</h3>
    <Formulario/>
    <Formulario/>
    <Formulario/>
    </div>
  )
}

export default App