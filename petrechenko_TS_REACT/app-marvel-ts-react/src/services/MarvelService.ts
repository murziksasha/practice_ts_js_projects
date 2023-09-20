
class MarvelService {
  private _apiBase = `https://gateway.marvel.com:443/v1/public/`;
  private _apiKey = `apikey=60bd687c9ec5a78d88fd43ba421607b0`;

  private getResource = async function (url: string) {
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
    return this.getResource(`${this._apiBase}characters?limit=9&offset=290&${this._apiKey}`);
  }

  getCharacter = (id: string = '1009259') => {
    const urlOneIdChar = `${this._apiBase}characters/${id}?${this._apiKey}`;
    return this.getResource(urlOneIdChar);
  }
}

export default MarvelService;