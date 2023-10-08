import { blog, qrcode } from './../../Images/Images'
import './Image_Side.css'

function Image_Side() {
  return (
    <div className='Fixed_container'>
      <div className='Image_Container'>
        <div className='main-image'>
          <img className='cover-image' src={blog.blog5} alt='' />
        </div>

        <div className='image-content'>
          <h1 className='logo'>M</h1>
          <div className='flex'>
            <div className='image-left-content'>
              <h2>You can change the world</h2>
              <p>how women are redirecting holywood</p>
              <span>by jasmin smith</span>
            </div>
            <div className='image-right-content'>
              <div className='row_reverse'>
                <h2>Strong style</h2>
                <p>new ways to wear denim belt bags made a comeback</p>
                <span>how to shop mindfully</span>
              </div>
            </div>
          </div>
        </div>
        <div className='qrcode'>
          <img src={qrcode} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Image_Side