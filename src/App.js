import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Home from './Home'
import Performer from './Performer'
import Feature from './Feature'
import Ticket from './Ticket'
import About from './About'
import Footer from './Footer'
import './App.css'

function App(){

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef()

  useEffect(() => {
    if(ref.current !== undefined && ref.current.clientHeight !== height){
      setHeight(ref.current.clientHeight)
    }
  }, [height, width])

  window.addEventListener('resize', () => {
    setWidth(document.body.clientWidth)
  })

  return (
    <>
      <Header innerRef={ref}/>
      <Home/>
      <Performer height={height}/>
      <Feature height={height}/>
      <Ticket height={height}/>
      <About height={height}/>
      <Footer/>
    </>
  )
}

export default App