
import { useEffect } from 'react'
import './App.css'
import toast from 'react-hot-toast'


function App() {
  useEffect(()=>{
    toast.error("hello")
  })

  return (
    <>
      Hello World
    </>
  )
}

export default App
