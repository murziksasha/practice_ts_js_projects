

export function promisesParallel() {

  const getJSON = async <T>(url: string, errorMsg = 'Something went wrong'): Promise<T> => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`${errorMsg} (${res.status})`);
    }
    return await (res.json() as Promise<T>);
  };

  const get3Countries = async function(c1: string, c2: string, c3: string) {
    try {
      // const [data1]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
      // const [data2]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
      // const [data3]: Array<any> =  await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
      
      // console.log([data1.capital, data2.capital, data3.capital]);

      const data: any = await Promise.any([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`),
      ]);
      // console.log(data.map(d => d[0].capital));
      console.log(data[0].capital);

    } catch (err) {
      console.error(err);
    }
  }

  get3Countries('ukraine', 'paraguay', 'usa');
  
}