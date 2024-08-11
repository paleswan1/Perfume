
import './App.css'
import Buy from './components/Buy/Buy'
import Essence from './components/Essence/Essence'
import Feature from './components/Feature/Feature'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'
import Products from './components/Products/Product'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Shop/>
      <Feature/>
      <Essence/>
      <Buy/>
      <Products/>
    </div>
  )
}

export default App
