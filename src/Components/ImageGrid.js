
import Images from "./Images"
const  ImageGrid = ({items,isLoading}) => {
    return (
        <div className="container">

            {  isLoading ? <h1>Loading...</h1> : (   <div className="images">
        
  
        {
           items.map(item => <Images key={item.char_id} item={item}  />)
        }

        </div>)}
     
        </div>
       
       
    )
}

export default ImageGrid
