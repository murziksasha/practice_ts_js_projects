

export function calcTempAmplitude(arr1: (number | string)[], arr2: (number | string)[], debug = false) {

  const mergeArray = [...arr1, ...arr2];
  let max: number;
  let min: number;
  let amplitude;
  let error: string[] = [];

  const calcMax: (arr: (number | string)[]) => number = (arr) => {
    let maxValue: number = -2000000;
    arr.forEach((item, i) => {
      if(typeof item === 'number'){
        if(item && item >= maxValue){
          maxValue = item;
        }
      } else {
        error.push(`elem in array is not a number:  ${item}`);
      }
    });
    return maxValue;
  };

  const calcMin: (arr: (number | string)[]) => number = (arr) => {
    let minValue: number = 20000000;
    arr.forEach((item, i) => {
      if(typeof item === 'number'){
        if(item && item <= minValue){
          minValue = item;
        }
      }
    });
    return minValue;
  }

  min = calcMin(mergeArray);
  max = calcMax(mergeArray);
  amplitude = max - min;
  console.log(`min: ${min}, max: ${max}, amplitude: ${amplitude}`);
  if(debug){
    error.forEach(item => console.log(item));
  }

}