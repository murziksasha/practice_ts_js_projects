

const timeout = function (s: number) { //возвращает новый промис которые будет отвергнут через определенное кол-во времени (согласно параметру)
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};



export const getJSON = async function (url: string) {
  const controller = new AbortController();
  try {
    const res = await Promise.race([fetch(url, {signal: controller.signal}), timeout(10)]) as Response;
    const data = await res.json();
    if(!res.ok) throw new Error(`${res.status}`);
    return data;
  } catch(err) {
    throw err;
  }
}