export function RemoveKeyInArray(array,key){

    return array.map((el)=>{
      key.forEach(element => {
        delete el[element]
      });
        return el
      })
}