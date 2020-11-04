import React from 'react'
import Rate from '../Rate'
 import "./Search.css"




const Search =({setSearchInput,serachRate,setSearchRate})=>{
    return(
        <div>
           < input
        type="text"
        placeholder="Type movie name to search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Rate rating={serachRate} setSearchRate={setSearchRate}/>
        </div>
    )
}


export default Search;