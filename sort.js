/*  Алгоритм сортировки выбором */

for (let i = 0; i < newArr.length; i++) {
  let min = i;
  for (let j = i + 1; j < newArr.length; j++) {
    if (newArr[min] > newArr[j]) {
      min = j; // Меняем значение переменной на наибольшее значение
    }
  }
  [newArr[i], newArr[min]] = [newArr[min], newArr[i]]; // Меняем значения переменных
}


/*  Алгоритм сортировки пузырьком */
for (let i = 0; i < newArr.length; i += 1) {
  for (let j = 0; j < newArr.length - i; j += 1) {
    if (newArr[j] > newArr[j + 1]) {
      [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]]; // Меняем значения переменных
    }
  }
}
/*  Алгоритм циклической сортировки */
for (let i = 0; i < newArr.length; i++) {
  let value = newArr[i];
  let position = i;

  for (let j = i + 1; j < newArr.length; j++) {
    if (newArr[j] < value) {
      position++;
    }
  }
  if (position === i) {
    continue;
  }
  while (value === newArr[position]) { // Избавляемся от дубликатов
    position++;
  }

  [newArr[position], value] = [value, newArr[position]]; // Меняем значения переменных

  while (position !== i) { // Запускаем цикл в обратную сторону
    position = i;
    for (let k = i + 1; k < newArr.length; k++) {
      if (newArr[k] < value) {
        position++;
      }
    }
    while (value === newArr[position]) { // Избавляемся от дубликатов
      position++;
    }
    [newArr[position], value] = [value, newArr[position]]; // Меняем значения пременных
  }
}
