interface MeasurObj{
  type: string,
  unit: string,
  value: string | null
}

export function measureKelvin() {

  // const measurements: MeasurObj = {
  //   type: 'temp',
  //   unit: 'celsius',
  //   value: prompt('Degrees celsius'),
  // };
  
  // let kelvin: number = 0;
  // const logic = (value: string | null) => {
  //     if (value && value !== null && value !== ' ' && !Number.isNaN(+value)) {
  //       kelvin = +value + 273;
  //     } else {
  //       value = prompt('Please enter the NUMBER value', 'number');
  //       logic(value);
  //     }
  //   return kelvin;
  // };
  
  // console.log(logic(measurements.value));


  // ----------- CODE challenge:
  const data1 = [17, 21, 23];
  const data2 = [12, 5, -5, 0, 4];
  
  const printForecast = (arr: number[]) => {
    const resutlArr: string[] = [];
    arr.forEach((item, i) => {
      if(i === 0){
        resutlArr.push(`... ${item}°C in ${i + 1} days`);
      } else if (i > 0 && i < arr.length - 1){
        resutlArr.push(`... ${item}°C in ${i + 1} days`);
      } else {
        resutlArr.push(`... ${item}°C in ${i + 1} days ...`);
      }
    });
    console.log(resutlArr.join(' '));
  };

  printForecast(data1);
  printForecast(data2);



  
}