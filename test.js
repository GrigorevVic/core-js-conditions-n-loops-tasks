/* 12345    => 12354
* 123450   => 123504
* 12344    => 12434
* 123440   => 124034
* 1203450  => 1203504
* 90822    => 92028
* 321321   => 322113
*
* @param {number} number The source number
* @returns {number} The nearest larger number, or original number if none exists.
*/

function getNearestBigger(number) {
    let nearst = number + 1;
    let nearestStr;
    let standart = String(number).split('');
    standart.sort((a, b) => a - b);
    standart = standart.join('');
    while (nearestStr !== standart) {
        nearestStr = String(nearst).split('');
        nearestStr.sort((a, b) => a - b);
        nearestStr = nearestStr.join('');
        nearst += 1
    }
    return nearst - 1;
}

console.log(getNearestBigger(1203450))