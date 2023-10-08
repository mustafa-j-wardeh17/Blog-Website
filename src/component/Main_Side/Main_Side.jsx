import Cards from './Cards/Cards'
import Footer from './Footer/Footer'
import './Main_Side.css'
import Row_Cards from './Row_Cards/Row_Cards'
import Slide from './slide/Slide'

function Main_Side() {
  return (
    <div className='Main_Side_Container'>
      <Slide />
      <Cards />
      <Row_Cards />
      <Footer />
    </div>
  )
}

export default Main_Side