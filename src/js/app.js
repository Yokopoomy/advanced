function sortByHealth(items) {
  return items.sort((x, y) => y.health - x.health);
}

export default function orderByProps(obj, args) {
  let arr = []
    for(let key in obj) {
        let obj2 = {};
          obj2.key = key;
          obj2.value = obj[key];
          arr.push(obj2);
  }
  arr.sort((a, b) => a.key > b.key ? 1 : -1)
  for(let i = args.length - 1; i >= 0; i--) {
    for(let k = 0; k < arr.length; k++){
      if(arr[k].key == args[i]){
        arr.unshift(...arr.splice(k,1));
      }
    }
  }
  return arr
}

function orderByProps2(obj, args) {
  let arr = []
    for(let i = 0; i < args.length; i++){
      for(let key in obj) {
        if(key == args[i]){
          let obj2 = {};
          obj2.key = key;
          obj2.value = obj[key];
          arr.push(obj2)
          
      }
      
    }
  }
  console.log(arr)
  return arr
}