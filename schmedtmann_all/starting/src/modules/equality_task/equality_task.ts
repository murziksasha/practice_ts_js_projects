

export function equality_task() {

  const numNeighbours = prompt('How many neighbour countries your country have?');
  let neigbours: number;

  if(numNeighbours && numNeighbours !== null && numNeighbours !== ' '){
     neigbours = +numNeighbours;
     if(neigbours || neigbours === 0){
      switch(neigbours){
        case 1:
          console.log('Only 1 border!');
          break;
        case 0: 
          console.log('No borders');
          break;
        default: 
          console.log('multy borders in your country');
      }
     }
  }



};