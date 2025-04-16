import BoxcarProvider from './providers/BoxcarProvider'
import LoaderModeProvider from './providers/LoaderModeProvider'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
    <LoaderModeProvider>
    {
      <BoxcarProvider>
    <header>
      <div>
          <img src={viteLogo} className="logo" alt="Jeep logo" />
          </div>
          <NavBar />
          </header>
          <main>
            <Outlet />
          </main>
            </BoxcarProvider>}
            </LoaderModeProvider>
    </>
  )
}


export default App
