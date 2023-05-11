
export const postData = async (url: string, data: any) => {
  const res: any = await fetch(url, {
    method: 'POST',
      // headers: { //когда json то необходимо!
      //   'Content-type': 'application/json'
      // },
      body: data
  });
  // return res.json();
  return await res.text();
};



export const getResource = async (url: string) => {
  const res: any = await fetch(url);
  
  if(!res.ok){
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};