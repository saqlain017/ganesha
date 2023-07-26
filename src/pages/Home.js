import React from 'react'
import Navbar from '../components/Navbar'
import IndexTitle from '../components/HomeComponents/IndexTitle'
import Slider from '../components/HomeComponents/Slider'
import JewelleryItem from '../components/JewelleryItems'
import JewelleryList from '../components/JewelleryList'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/styles/PageStyles/Home.css'
export const Home = ()=>{

    return(
        <div className="Home">
            <Navbar />
            <IndexTitle />
            <Slider />
            <div className="jewellery-index-list">
            <div className="Jewellery-carts">
                <div className="jewelleryList">
                {JewelleryItem.map((JewelleryItem,key)=>{
                    return <JewelleryList key={key} name={JewelleryItem.name} price={JewelleryItem.price} image={JewelleryItem.image}/>
                })}
                </div>
            </div>
            </div>
        </div>
    )
}
