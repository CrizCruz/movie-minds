const API = "https://api.themoviedb.org/3"

export function get(path){
    
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWRlNmVlYTg2ZWU1MmYzZjA1YTA3NWU3ZTYzYmM1NSIsInN1YiI6IjY1NjY3M2I3YThiMmNhMDBlYTg4YmRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._pkpjk_rBkLVvcbGu9xwqCu7AyhtMgYmrv0nF5rB7ZE",
        },
      };
  
      return fetch(
        API + path,
        options
      )
        .then((response) =>
          response.json()
        )
        
} 