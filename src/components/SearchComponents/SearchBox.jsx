import React from 'react'
import '../../assets/styles/ComponentStyles/SearchBox.css'

const SearchBox = ()=>{
    return(
        <div className="search-box">
                <input type="text" placeholder='Search for Goods' onChange={(e)=>console.log(e.target.value)}/>
            </div>
    )
}
export default SearchBox