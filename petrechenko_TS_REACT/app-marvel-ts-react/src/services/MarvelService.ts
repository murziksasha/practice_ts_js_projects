
export interface IResponse {
  id?: string;
  name:  string;
  description: string;
  thumbnail: string;
  homepage: string;
  wiki: string;
  comiklink?: string;
  comics?: string[]
}


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

  getAllCharacters = async (offset: number) => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map((item: any): IResponse => {
      return {
        id: item.id,
        name:  item.name,
        description: this._truncateText(item.description, 63),
        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension,
        homepage: item.urls[0].url,
        wiki: item.urls[1].url,
        comiklink: item.urls[2].url
      }
    });
  }

  getCharacter = async (id: string) => {
    const urlOneIdChar = `${this._apiBase}characters/${id}?${this._apiKey}`;
    const res = await this.getResource(urlOneIdChar);
    return this._transformCharacter(res);
  }

  private  _truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  private _transformCharacter = (res: any): IResponse => {
    const baseData = res.data.results[0];
      return {
        name:  baseData.name,
        description: this._truncateText(baseData.description, 63),
        thumbnail: baseData.thumbnail.path + '.' + baseData.thumbnail.extension,
        homepage: baseData.urls[0].url,
        wiki: baseData.urls[1].url,
        comics: baseData.comics.items
    }
  }


}

export default MarvelService;