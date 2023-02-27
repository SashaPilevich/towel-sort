// You should implement your task here.

module.exports = function towelSort(matrix) {
    
    let res = [];
    if (!Array.isArray(matrix) || matrix === undefined) {
        return res;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (!Array.isArray(matrix[i])) {
            res.push(matrix[i]);
        } else if (Array.isArray(matrix[i]) && i % 2 === 0) {
            res = res.concat(towelSort(matrix[i]));
        } else if (Array.isArray(matrix[i]) && i % 2 !== 0) {
            res = res.concat(towelSort(matrix[i].reverse()));
        }
    }
    return res;
};
