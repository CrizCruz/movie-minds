import style from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/UseQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.searchContainer} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input
          className={style.searchInput}
          type="text"
          value={search}
          aria-label="search Movies"
          onChange={(e) => {
            const value = e.target.value;
            navigate("/?search=" + value);
            
          }}
          placeholder="Buscar peliculas.."
        />
          <CiSearch size={20} color="black" className={style.searchButton}/>
        
      </div>
    </form>
  );
}
