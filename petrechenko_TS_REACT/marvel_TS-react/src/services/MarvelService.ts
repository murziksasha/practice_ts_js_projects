

export default class MarvelService {

  URL = `https://gateway.marvel.com:443/v1/public/characters?apikey=60bd687c9ec5a78d88fd43ba421607b0`;

  getResource = async (url: string) => {
    try {
      const res = await fetch(url);
      if(!res.ok) throw new Error(`${res.status}`);
      const data = await res.json();
      return data;
    } catch(err) {
         throw err;
    }
  }

  getAllCharacters = () => {
    return this.getResource(this.URL);
  }



}