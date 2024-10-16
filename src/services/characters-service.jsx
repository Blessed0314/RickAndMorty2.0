import axios from "axios";

const FetchCharacters = async () => {
  const urlBase = "https://rickandmortyapi.com/api/character";
  try {
    const response = await axios.get(urlBase);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
  
    
};

export default FetchCharacters;
