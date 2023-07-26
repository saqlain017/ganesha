import React from 'react'
import Image1 from '../../assets/images/Slider1.jpg'
import Image2 from '../../assets/images/Slider2.jpg'
import Image3 from '../../assets/images/Slider3.jpg'
import Image4 from '../../assets/images/Slider4.jpg'
import '../../assets/styles/ComponentStyles/Slider.css'


const Slider = ()=>{
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1500">
        <div className="carousel-inner myCarousel">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100" alt="Slide 3" />
          </div>
          <div className="carousel-item">
            <img src={Image4} className="d-block w-100" alt="Slide 4" />
          </div>
        </div>
      </div>
    )
}
export default Slider