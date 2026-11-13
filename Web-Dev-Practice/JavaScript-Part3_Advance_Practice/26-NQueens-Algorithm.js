function dfsNQueens(n) {
  if (n < 1) return [];

  const solutions = []; // Saare final answers ismein jayenge
  const board = [];     // Abhi wala rasta, jaise [1, 3, 0, 2]

  function isSafe(row, col) {
    for (let prevRow = 0; prevRow < row; prevRow++) {
      const prevCol = board[prevRow];

      // 1. Same column check OR 2. Diagonal check
      if (
        prevCol === col || 
        Math.abs(row - prevRow) === Math.abs(col - prevCol)
      ) {
        return false;
      }
    }
    return true;
  }

  function placeQueenInRow(row) {
    // BASE CASE: Saari rows bhar gayi!
    if (row === n) {
      // TODO 1: 'board' ki shallow copy bana kar 'solutions' mein push karo
      solutions.push([...board])
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        // TODO 2 (DO): 'board' mein abhi wala 'col' daalo
        board.push(col);
        // RECURSE: Agli row par jao
        placeQueenInRow(row + 1);

        // TODO 3 (UNDO / BACKTRACK): 'board' se aakhri daala hua 'col' wapas nikalo
        board.pop();
      }
    }
  }

  placeQueenInRow(0);
  return solutions;
}
console.log(dfsNQueens(4))