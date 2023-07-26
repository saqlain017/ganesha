import React from 'react'
import JewelleryItem from '../components/JewelleryItems'
import JewelleryList from '../components/JewelleryList'
import SearchBox from '../components/SearchComponents/SearchBox'
export const Search = ()=>{

    return(
        <div className="Search">
            <SearchBox />
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