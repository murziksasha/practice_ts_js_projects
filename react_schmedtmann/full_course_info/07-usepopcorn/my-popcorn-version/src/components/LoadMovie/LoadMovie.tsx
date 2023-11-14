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

export const loadMovieById = async function(id?:string | null) {

  if(!id) return;


   const link = `${API_URL}?i=${id}&apikey=${API_KEY}`;

  try {
    const data = await getJSON(link);
    if(data.Response === 'False') throw new Error('Movies not found');
    return data;
  } catch(err) {
    console.error(`${err} 💣💣💣💣`);
  }
};
