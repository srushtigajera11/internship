
// import E2home from './components/eg2/E2home'
// import PropsHome from './components/propsTask/PropsHome'
import './input.css'
import MapHome from './components/MapTask/MapHome'
import { Route,Routes } from 'react-router-dom';
import State from './components/hooks/State';
import UseRef from './components/hooks/UseRef';
import Home from './components/hooks/Home';
import Categories from './components/e-com/Categories';
import Product from './components/e-com/Product';
import ProductDetails from './components/e-com/ProductDetails';
import Navbar from './components/e-com/Navbar';
import Footer from './components/e-com/Footer';



function App() {
  return (
    <>
    <Navbar />  

    <Routes>
    

      <Route path='/' element={<Categories />}></Route>
      <Route path='/product/:cname' element={<Product />}></Route>
       <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
    </Routes>
    {/* {/* <E2home />
     <PropsHome /> 
     <MapHome /> */}
     <Footer />
    </>

  )
}

export default App
