import React from 'react'
import '../assets/styles/ComponentStyles/JewelleryList.css'
const JewelleryList = (props)=>{
    return (
        <div className="JewelleryItem">
            <div className="Jewellery-item-box">
                <div className="image-box">
                    <div className='bg-img' style={{backgroundImage: `url(${props.image})`}}></div>
                </div>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            </div>
        </div>
    )
}

export default JewelleryList