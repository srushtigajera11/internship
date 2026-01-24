
import './reactCSS.css'
// import E2home from './components/eg2/E2home'
// import PropsHome from './components/propsTask/PropsHome'
import MapHome from './components/MapTask/MapHome'
import { Route,Routes } from 'react-router-dom';
import State from './components/hooks/State';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<State/>}></Route>
    </Routes>
    {/* {/* <E2home />
     <PropsHome /> 
     <MapHome /> */}
    </>

  )
}

export default App
