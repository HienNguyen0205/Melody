import { useState, useEffect, useRef } from 'react'
import Load from './Load'
import Header from './Header'
import Home from './Home'
import Performer from './Performer'
import Feature from './Feature'
import Ticket from './Ticket'
import About from './About'
import Footer from './Footer'
import './App.css'

const linkApi = 'https://melody.infinityfreeapp.com'
const linkGetApi = linkApi + '/getCustomer.php'
const linkAddApi = linkApi + '/addCustomer.php'
const linkDeleteApi = linkApi + '/deleteCustomer.php'
const linkUpdateApi = linkApi + '/updatePurchase.php'

function App(){

  const [load, setLoad] = useState(false)
  const [items, setItems] = useState([])
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const ref = useRef()

  useEffect(() => {
    fetch(linkGetApi,{
      mode: 'no-cors',
      credentials: 'include'
    })
      .then(result => result.json())
      .then(result => {
        setItems(result.data)
        setLoad(true)
      })
  }, [])

  useEffect(() => {
    if(ref.current !== undefined && ref.current.clientHeight !== height){
      setHeight(ref.current.clientHeight)
    }
  }, [height, width, load])

  window.addEventListener('resize', () => {
    setWidth(document.body.clientWidth)
  })

  return (
    <>
      {!load && <Load/>}
      {load && <Header innerRef={ref}/>}
      {load && <Home/>}
      {load && <Performer height={height}/>}
      {load && <Feature height={height}/>}
      {load && <Ticket height={height} data={items}
        linkGet={linkGetApi}
        linkAdd={linkAddApi}
        linkDelete={linkDeleteApi}
        linkUpdate={linkUpdateApi}
      />}
      {load && <About height={height}/>}
      {load && <Footer/>}
    </>
  )
}

export default App
