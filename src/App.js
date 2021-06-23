import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Header from './Components/Header.js'
import ImageGrid from './Components/ImageGrid';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')


 
  useEffect(() => {
    
   const fetchItems = async  () =>{
     const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${search}`)
     console.log(result.data)
     setItems(result.data)
     setIsLoading(false)
   }
   fetchItems()

 
   
  }, [search])










  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}  />
      <ImageGrid items={items} isLoading={isLoading}/>
    
    </div>
  );
}

export default App;
