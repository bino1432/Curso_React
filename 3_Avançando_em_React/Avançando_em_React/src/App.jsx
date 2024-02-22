import './App.css'

import City from './assets/city.jpg'

import ManegeData from './components/ManegeData'

function App() {

  return (
    <>
      <h1>Titulo seção 3</h1>
      <img src="./img1.jpg" alt="paisagem" />
      <img src={City} alt="Cidade" />
      <ManegeData />
    </>
  )
}

export default App
