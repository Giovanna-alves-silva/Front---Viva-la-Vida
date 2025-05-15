import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Container from './components/layout/Container';
import Home from './Components/pages/Home';
import Cardapio from './Components/pages/Cardapio/Cardapio';
import Pratos from './Components/pages/Cardapio/Pratos';
import Promocoes from './components/pages/Promocoes';
import Unidades from './Components/pages/Unidades';
import Login from './Components/pages/Login';
import Cadastro from './Components/pages/Cadastro';
import NavBar from './Components/layout/NavBar';
import ListaCardapio from './Components/pages/Cardapio/listaCardapio';
import Footer from './Components/layout/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />} />

              <Route path='/cardapio' element={<Cardapio />}>
                <Route index element={<Navigate to="pratos" replace />} />
                <Route path='pratos' element={<Pratos />} />
                <Route path='listacardapio' element={<ListaCardapio />} />
              </Route>

              <Route path='/promocoes' element={<Promocoes />} />
              <Route path='/unidades' element={<Unidades />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/login' element={<Login />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
