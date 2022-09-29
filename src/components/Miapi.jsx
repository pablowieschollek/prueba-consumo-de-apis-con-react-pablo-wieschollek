import React, {useState, useEffect} from 'react'

export const Miapi = () => {

    const [birds, setBirds] = useState([]);
    const [search, setSearch] = useState(""); 
    
        const searcher = (e) => {
            setSearch(e.target.value)
        }
    


    useEffect(() => {
        const monsters = async () => {
            const url = `https://aves.ninjas.cl/api/birds`;
            const response = await fetch(url)
            const data = await response.json()
            setBirds(data); 
            }
        monsters();
        }, []);
        
        
    return (
        <div> 
            <nav className='navbar navbar-light ps-3'>
            <input placeholder='buscar' value={search} onChange={searcher}></input>
            </nav>
            <div className='container mt-3'>
            <div className='row g-4'>
             

       {birds.filter((data) => {
        return data.name.spanish.toLowerCase().includes(search.toLocaleLowerCase())
       })
       .sort((a,b) => {
        return a.name.spanish.localeCompare(b.name.spanish) 
       }).map(bird => (
        <div key={bird} className='col-10 col-md-6 col-lg-4 mx-auto'>
        <div  className="card h-100">
            <img src={bird.images.main} className="card-img-top" ></img>
            <div className="card-body">
                <h5 className="card-title">{bird.name.spanish}</h5>
            </div>
        </div>
        </div>))}
</div>
</div>

        </div>
       
    )
}

