import React from 'react'
import './home.css'
import Cont1 from './cont1'
import Cont2 from './cont2'
import Cont3 from './cont3'
import Cont4 from './cont4'
import Cont5 from './cont5'

const Home = () => {
  return (
    <div className='body'>
        <Cont1/>
        <Cont2/>
        <Cont3/>
        <Cont4/>
        <Cont5/>
    </div>
  )
}

export default Home