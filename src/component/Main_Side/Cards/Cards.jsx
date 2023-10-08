import { Cards_Data } from "../../../Images/Images"
import "./Cards.css"
function Cards() {
  return (
    <div className="cards_container">
      {
        Cards_Data.map(card=>(
          <div className="card_container" key={card.id}>
            <div className="card_image_container">
              <img src={card.cover} alt="" className="card_image_container_src"/>
            </div>
            <div className="card_content">
              <span className="card_category">{card.category}</span>
              <h4 className="card_title">{card.title}</h4>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cards