import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='titulo'>Titulo da pagina</h1>
      <p>paragrafo da pagina</p>
      <button>botao</button>
    </>
  )
}

export default App
