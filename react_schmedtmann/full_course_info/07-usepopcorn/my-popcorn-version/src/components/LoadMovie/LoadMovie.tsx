import { API_KEY, API_URL } from "../../services/constantData";
import { getJSON } from "../../services/fetchData";



export const loadMovie = async function(searchText: string) {

  if(!searchText) return;
  const link = `${API_URL}?apikey=${API_KEY}&s=${searchText}`;

  try {
    const data = await getJSON(link);
    if(data.Response === 'False') throw new Error('Movies not found')
    const {Search} = data; 
    return Search;
  } catch(err) {
    console.error(`${err} 💣💣💣💣`);
  }

};
