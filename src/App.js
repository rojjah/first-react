import React from 'react'
import Navbar from './component/navbar/Navbar'
import Slider from './component/slider/Slider'
import Footer from './component/footer/Footer'
import Form from './component/form/Form'
import Card from './component/card/Card'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Form/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App