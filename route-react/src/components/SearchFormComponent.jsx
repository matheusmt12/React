import { useState } from "react";
import { useNavigate } from "react-router-dom"


const SearchFormComponent = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/search?q=' + query)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="query">Search</label>
      <input type="text" name="query"  onChange={(e) => setQuery(e.target.value)}/>
      <input type="submit" />
    </form>
  )
}

export default SearchFormComponent