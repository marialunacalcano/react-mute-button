import { useState } from 'react'
import onIcon from './assets/icons/on.svg'
import offIcon from './assets/icons/off.svg'
import './App.css'

function App() {
const [isMuted, setIsMuted] = useState(false)
const handleClick= () => {
  setIsMuted((isMuted) => !isMuted)
}

  return (
    <>
  <h1> Mute Button</h1> 
  <img 
  src={isMuted ? offIcon : onIcon}
  alt={isMuted ? 'Sound Off' : 'Sound On'}
  onClick={handleClick}
  />
  </>
  )
}



export default App

