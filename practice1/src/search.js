import React, { useState } from 'react'

function Search() {
    const List = [
        "banana","mango","apple"
    ]
    const [state, setState] = useState(List);
    const handleSearch = (event) => {
        if (event.target.value === "") {
            setState(List);
            return;
        }
        const filteredValues = List.filter((item) => item.indexOf(event.target.value) !== -1)
        setState(filteredValues)
    }
    

  return (
      <div>
          Search: <input type="text" name="query" onChange={handleSearch} />
          
          { state.map((item, index) => (<div key={index}> { item}</div>))}
        
    </div>
  )
}

export default Search