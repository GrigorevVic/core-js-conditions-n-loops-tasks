function convertNumberToString(numberStr) {
  const res = [];
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        res.push('one');
        break;

      case '2':
        res.push('two');
        break;

      case '3':
        res.push('three');
        break;

      case '4':
        res.push('four');
        break;

      case '5':
        res.push('five');
        break;

      case '6':
        res.push('six');
        break;

      case '7':
        res.push('seven');
        break;

      case '8':
        res.push('eight');
        break;

      case '9':
        res.push('nine');
        break;

      case '0':
        res.push('zero');
        break;

      case '.':
        res.push('point');
        break;

      case ',':
        res.push('zpt');
        break;

      default:
        res.push('minus');
        break;
    }
  }
  return res.join(' ');
}
console.log(convertNumberToString('-810'));