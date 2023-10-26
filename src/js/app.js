export default function orderByProps(obj, args) {
  const remainingKeys = Object.keys(obj)
    .filter((key) => !args.includes(key))
    .sort();

  const orderedKeys = [...args, ...remainingKeys];

  return orderedKeys.map((key) => ({
    key,
    value: obj[key],
  }));
}
