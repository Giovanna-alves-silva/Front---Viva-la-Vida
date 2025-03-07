import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Container from './Components/layout/Container'
import Home from './Components/pages/Home'
import NavBar from './Components/layout/NavBar'



function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Container>

            <Routes>
              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />}/>
    
              </Route>
            </Routes>
          </Container>
       </BrowserRouter>
      </div>
    </>
  )
}

export default App
