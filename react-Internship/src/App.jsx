
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



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<State/>}></Route>
      <Route path='/ref' element={<UseRef/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path='/c' element={<Categories />}></Route>
      <Route path='/product/:cname' element={<Product />}></Route>
    </Routes>
    {/* {/* <E2home />
     <PropsHome /> 
     <MapHome /> */}
    </>

  )
}

export default App
