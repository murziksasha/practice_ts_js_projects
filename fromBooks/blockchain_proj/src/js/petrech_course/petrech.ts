export function petrech() {


 

  ///////////////////////////////////////////////////////////////
  // структура данных склада с одеждой

  interface IClothesWarehouse {
    jackets: 'empty' | number;
    hats: 'empty' | number;
    socks: 'empty' | number;
    pants: 'empty' | number;
  }

  // структура данных склада с канцтоварами

  interface IStationeryWarehouse {
    scissors: 'empty' | number;
    paper: 'empty' | boolean;
  }

  // структура данных склада с бытовой техникой

  interface IAppliancesWarehouse {
    dishwashers: 'empty' | number;
    cookers: 'empty' | number;
    mixers: 'empty' | number;
  }

  // общая структура данных, наследует все данные из трех выше
  // + добавляет свои

  interface ITotalWarehouse
    extends IClothesWarehouse,
      IStationeryWarehouse,
      IAppliancesWarehouse {
    deficit: boolean;
    date: Date;
  }

  // главный объект со всеми данными, должен подходить под формат TotalWarehouse

  const totalData: ITotalWarehouse = {
    jackets: 5,
    hats: 'empty',
    socks: 'empty',
    pants: 15,
    scissors: 15,
    paper: true,
    dishwashers: 3,
    cookers: 'empty',
    mixers: 14,
    deficit: true,
    date: new Date(),
  };

  function printReport(data: ITotalWarehouse): string {
    //фильтрация данных
    let result: string[] = [];
    for (let key in data) {
      if (data[key as keyof ITotalWarehouse] === 'empty') {
        result.push(key);
      }
    }
    if(result.length){
      return `We need this items: ${result.join(', ')}`;
    } else {
      return "Everything fine";
    }
    // или
  }

  // console.log(printReport(totalData));
}
