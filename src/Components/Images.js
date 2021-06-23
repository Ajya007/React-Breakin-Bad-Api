import React from 'react'

function Images({item}) {
    return (
        <div className="image">
           <img  src={item.img} style={{width:'100%',height:'300px'}} alt="characters"/>
           <h1> {item.name} </h1>
           <div className="detail">
              
               <p> Actor name:{item.portrayed}</p>
               <p> Nick name:{item.nickname}</p>
               <p> Birth Date:{item.birthday}</p>
               <p> Status:{item.status}</p>
           </div>
        </div>
    )
}

export default Images
