function sortByHealth(items) {
  return items.sort((x, y) => y.health - x.health);
}

export default function orderByProps(obj, args) {
  const arr = [];
  for (const key in obj) {
    const obj2 = {};
    obj2.key = key;
    obj2.value = obj[key];
    arr.push(obj2);
  }
  arr.sort((a, b) => (a.key > b.key ? 1 : -1));
  for (let i = args.length - 1; i >= 0; i--) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k].key == args[i]) {
        arr.unshift(...arr.splice(k, 1));
      }
    }
  }
  return arr;
}
