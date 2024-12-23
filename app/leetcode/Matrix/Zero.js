// 给定一个mxn的矩阵，如果一个元素为0,将行和列都设为0，请使用原地算法
// 例子:[[1,1,1],[1,0,1],[1,1,1]],输出：[[1,0,1],[0,0,0],[1,0,1]]
function MatirxToZero(matrix) {
  let ColNumber = new Set();
  let rowNumber = new Set();
  for (let i = 0; i < matrix.length; i++) {
    const item = matrix[i];
    for (let j = 0; j < item.length; j++) {
      if (matrix[i][j] === 0) {
        ColNumber.add(j);
        rowNumber.add(i);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const item = matrix[i];
    for (let j = 0; j < item.length; j++) {
      if (rowNumber.has(j) || ColNumber.has(i)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

console.log(
  MatirxToZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
