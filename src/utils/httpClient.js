const API = process.env.REACT_APP_API
const API_TOKEN = process.env.REACT_APP_API_TOKEN

export function get(path){
    
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer " + API_TOKEN,
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