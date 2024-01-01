import { Outlet } from 'react-router-dom'
import './App.css'
import {Navbar} from './components/index'
function App() {
  return (
    <>
    <Navbar/>
    <Outlet>
      <main>
      </main>
    </Outlet>
    </>
  )
}

export default App
