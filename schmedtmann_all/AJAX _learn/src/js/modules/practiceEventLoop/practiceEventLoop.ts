

export function practiceEventLoop(){


    console.log('Test Start');
    setTimeout(()=> console.log(`0 sec timer`), 0);
    Promise.resolve('Resolved Promise 1')
    .then(data => console.log(data));
    Promise.resolve('Resolve promise 2')
    .then(data => {
      for(let i = 0; i < 100000000; i++){}
      console.log(data);
    })
    console.log('test end')



} 