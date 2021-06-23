import React from 'react'

function Search({setSearch,search}) {
    return (
        <div className ="search">
            <input  type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Characters..." value={search}/>
        </div>
    )
}

export default Search
