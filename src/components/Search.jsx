import React from 'react'

//creating a search component and distruct the props object to just use the names direclty without
//having to use the props. ...
const Search = ({searchTerm , setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="./search.svg" alt="Search" />
           
            <input 
            type="text"
            placeholder='Search Through Thousands of Movies'
            
            onChange={(e) =>setSearchTerm(e.target.value)}
            />
        
        </div>
    </div>
  )
}

export default Search