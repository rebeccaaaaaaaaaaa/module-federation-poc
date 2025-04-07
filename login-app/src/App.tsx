import { Suspense } from 'react'
import './App.css'
import Login from './components/Login'

function App() {

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
       <Login />
      </Suspense>
    </>
  )
}

export default App
