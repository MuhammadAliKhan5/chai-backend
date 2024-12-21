import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Button(){
  return(
    <button>Click me</button>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=''>Chai and fullStack</h1>
      <Button />
    </>
  )
}

export default App
