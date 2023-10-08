import { Cards_Data, Slide_Data } from '../../../Images/Images'
import './Row_Cards.css'

function Row_Cards() {
  return (
    <div className="cards_container">
      {
        Slide_Data.map(slide=>(
          <div className="slide_row_container" key={slide.id}>
            <div className="slide_row_image_container">
              <img src={slide.cover} alt="" className="slide_row_image_container_src"/>
            </div>
            <div className="slide_row_content">
              <span className="slide_row_category">{slide.category}</span>
              <h3 className="slide_row_title">{slide.title}</h3>
              <h5 className="slide_row_desc">{slide.desc}</h5>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Row_Cards