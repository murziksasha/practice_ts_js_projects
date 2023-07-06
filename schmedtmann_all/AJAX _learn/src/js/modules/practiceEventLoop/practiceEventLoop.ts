

export function practiceEventLoop(){

  const btn = document.querySelector('button') as HTMLButtonElement;

  const lotteryPromise = new Promise((resolve, reject) => {
    console.log(`Lottery draw is happening 🔮`);
    setTimeout(()=>{
      if(Math.random() >= 0.5) {
        resolve(`You WON 💰`);
      } else {
        reject(new Error(`You LOSE 💩`));
      }      
    }, 1500);
  });

  lotteryPromise.then(res => console.log(res))
  .catch(err => console.log(err));

  btn.addEventListener('click', () => {
    location.reload();
  });

  const wait = (seconds: number) => {
    return new Promise((res) => {
      setTimeout(res, seconds*1000);
    })
  }

  wait(3).then(data => {
    
    console.log(`Promise 3 sec`);
    return wait(1);
  
  })
  .then (() => console.log(`Promise one seconds...`))



} 