
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    for (let i = 0; i<matrix.length; i++) {
        res = res.concat(matrix[i])
    }
    return res;
}
