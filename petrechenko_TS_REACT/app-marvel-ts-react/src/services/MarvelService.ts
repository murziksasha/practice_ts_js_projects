
import { useHttp, IUseHttp } from "../hooks/http.hook";

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

export interface IUseHttpWithMarvelService extends IUseHttp {
  getCharacter: (id: string) => Promise<IResponse>;
  getAllCharacters: (offset: number) => Promise<any>;
}




export function  useMarvelService(): IUseHttpWithMarvelService  {

  const {loading, request, error, clearError} = useHttp();

  const _apiBase = `https://gateway.marvel.com:443/v1/public/`;
  const _apiKey = `apikey=60bd687c9ec5a78d88fd43ba421607b0`;



  const getAllCharacters = async (offset: number) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
    return res.data.results.map((item: any): IResponse => {
      return {
        id: item.id,
        name:  item.name,
        description: _truncateText(item.description, 63),
        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension,
        homepage: item.urls[0].url,
        wiki: item.urls[1].url,
        comiklink: item.urls[2].url
      }
    });
  }

  const getCharacter = async (id: string) => {
    const urlOneIdChar = `${_apiBase}characters/${id}?${_apiKey}`;
    const res = await request(urlOneIdChar);
    return _transformCharacter(res);
  }

  function _truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  const _transformCharacter = (res: any): IResponse => {
    const baseData = res.data.results[0];
      return {
        name:  baseData.name,
        description: _truncateText(baseData.description, 63),
        thumbnail: baseData.thumbnail.path + '.' + baseData.thumbnail.extension,
        homepage: baseData.urls[0].url,
        wiki: baseData.urls[1].url,
        comics: baseData.comics.items
    }
  }

  return {loading, request, error, clearError, getCharacter, getAllCharacters};

}