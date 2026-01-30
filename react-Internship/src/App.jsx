
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
import { useLocation } from 'react-router-dom';
import imga from './assets/sale.png'
import AllProducts from './components/e-com/AllProducts';


function App() {
  const location = useLocation();
  const currentPath = location.pathname
  let leftUi = currentPath == '/' ? <img className='w-full h-[60vh]' src={imga}  alt="" />  : <Categories direction="bottom"></Categories>
  return (
    <>
    
    <Navbar />  
    <div className='flex'>
        <div className='w-1/6'>
      {leftUi}
  </div>
    <div className='w-5/6'>
    <Routes>
    
     <Route path='/' element={<Categories direction="right"></Categories>}></Route>
      <Route path='/allProducts' element={<AllProducts />}></Route>
      <Route path='/product/:cname' element={<Product />}></Route>
       <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
    </Routes></div> </div>
    {/* {/* <E2home />
     <PropsHome /> 
     <MapHome /> */}
     <Footer />
    
    </>

  )
}

export default App
