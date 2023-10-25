export default function orderByProps(obj, args) {
  const arr = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const obj2 = {};
      obj2.key = key;
      obj2.value = obj[key];
      arr.push(obj2);
    }
  }
  arr.sort((a, b) => (a.key > b.key ? 1 : -1));
  for (let i = args.length - 1; i >= 0; i -= 1) {
    for (let k = 0; k < arr.length; k += 1) {
      if (arr[k].key === args[i]) {
        arr.unshift(...arr.splice(k, 1));
      }
    }
  }
  return arr;
}
