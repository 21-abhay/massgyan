import React,{useState, useEffect,} from 'react';

export default function SearchBar() {
  const [searchItem,setSearchItem] = useState('');
  useEffect(() => {
    
  }, [searchItem]);

  const SearchOnChange = (e)=>{
    const item = e.currentTarget.value;
    setSearchItem(item);
    console.log(item);
  }

  return (
    <div className='container my-3'>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={SearchOnChange}/>
            <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
    </div>
  )
}
