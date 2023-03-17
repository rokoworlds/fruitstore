import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Store } from './pages/Store'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
