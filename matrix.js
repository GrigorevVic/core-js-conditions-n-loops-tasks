/* @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]



function rotateMatrix(matrix) {
 const copy = JSON.parse(JSON.stringify(arr));
 const copy2 = matrix;


    let i1 = 0;
    let j1 = arr.length - 1;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            arr[i1][j1] = copy[i][j];
            i1 += 1;
        }
        i1 = 0;
        j1 -= 1;
    }
    return arr;
}
const a = rotateMatrix(arr);
console.log(a);