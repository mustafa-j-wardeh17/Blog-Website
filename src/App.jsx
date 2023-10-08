import { useState } from 'react'

import './App.css'
import Main_Side from './component/Main_Side/Main_Side'
import Image_Side from './component/Image_Side/Image_Side'

function App() {

  return (
    <div className='Container'>
      <div className='Image_Container left-content'>
        <Image_Side />
      </div>
      <div className='Main_Container right-content'>
        <Main_Side />
      </div>
    </div>

  )
}

export default App
