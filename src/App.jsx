import { useContext } from 'react'
import './App.css'
import { Context } from './context/Context'
import HomeRoutes from './routes/HomeRoutes'
import LoginRoutes from './routes/LoginRoutes'

function App() {
  const { token } = useContext(Context)
  if(token) {
    return <HomeRoutes />
  } else {
    return <LoginRoutes />
  }
}

export default App
