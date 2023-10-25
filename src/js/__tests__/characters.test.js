import orderByProps from '../app';

test('sort by args', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const args = ['name', 'level'];
  const result = orderByProps(obj, args);
  expect(result).toEqual([
    { key: 'name', value: 'мечник' }, // порядок взят из массива с ключами
    { key: 'level', value: 2 }, // порядок взят из массива с ключами
    { key: 'attack', value: 80 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
    { key: 'defence', value: 40 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
    { key: 'health', value: 10 }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ]);
});

test('hasOwnProp test', () => {
  const objWithInheritedProps = Object.create({ inheritedProp: 'test' });
  objWithInheritedProps.ownProp = 'test';

  const result = orderByProps(objWithInheritedProps, ['ownProp']);
  expect(result).toEqual([{ key: 'ownProp', value: 'test' }]);
});
