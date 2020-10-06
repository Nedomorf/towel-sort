
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    let l = [];
    for (let i = 0; i<matrix.length; i++) {
        l[i] = matrix[i].length;
    }
    const m = Math.min(...l);
    for (let i = 0; i<matrix.length; i++) {
        let v = matrix[i].slice(0,m);
        res = res.concat(v);
    }
    return res;
}
