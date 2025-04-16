import BoxcarProvider from './providers/BoxcarProvider'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <header>
      <div>
          <img src={viteLogo} className="logo" alt="Jeep logo" />
          </div>
          <NavBar />
          </header>
          <main>
            <BoxcarProvider>
            <Outlet />
            </BoxcarProvider>
          </main>
    </>
  )
}


export default App
