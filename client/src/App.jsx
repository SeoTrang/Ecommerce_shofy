import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootRoutes from './routes/RootRoutes'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootRoutes/>
      <Toaster 
        toastOptions={{
            success: {
              style: {
                background: '#31B757',
                color: '#FFF',
              },
            },
            error: {
              style: {
                background: 'red',
                color: '#FFF',
              },
            },
          }}
    />
    </>
  )
}

export default App
