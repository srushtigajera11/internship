
import './reactCSS.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import Container from './components/Container'

function App() {
  return (
    <>
      <Header/>
      <div className=' h-[80vh] flex justify-between '>
       <Sidebar />
       <Container />
       <Sidebar />
      </div>
      <Footer />
    </>
  )
}

export default App
