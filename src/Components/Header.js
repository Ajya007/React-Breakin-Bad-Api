import Search from "./Search"

const Header = ({search,setSearch}) => {
    return (
        <div className="container">
        <div className="header">
            <h1><span className="green">Br</span>eaking</h1>
            <h1><span className="green">Ba</span>d</h1>

            
        </div>
        <Search search={search} setSearch={setSearch}/>
        </div>

    )
}

export default Header
