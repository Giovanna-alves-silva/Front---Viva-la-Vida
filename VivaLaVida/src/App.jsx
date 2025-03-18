import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import Cardapio from './components/pages/Cardapio'
import Promocoes from './components/pages/Promocoes'
import Unidades from './Components/pages/Unidades'
import Login from './Components/pages/Login'

import Cadastro from './Components/pages/Cadastro'
import NavBar from './Components/layout/NavBar'



function App() {

  return (
    <>

      <div>

        <BrowserRouter >

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />

                <Route path='/cardapio' element={<Cardapio />} />

                <Route path='/promocoes' element={<Promocoes />} />

                <Route path='/unidades' element={<Unidades />} />

                <Route path='/cadastro' element={<Cadastro />} />

                <Route path='/login' element={<Login />}/>

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>

    </>
  )
}

export default App
