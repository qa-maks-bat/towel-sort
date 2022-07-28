// You should implement your task here.

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ];

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }

    if (matrix.length === 0 || !Array.isArray(matrix[1])) {
        return matrix;
    }

    let result = [];

    result = matrix.reduce((acc, innerArray, index) => {
        if (index % 2 !== 0) {
            return (acc = [...acc, ...innerArray.reverse()]);
        } else {
            return (acc = [...acc, ...innerArray]);
        }
    }, []);

    return result;
}

// console.log("matrix =", matrix, "result =", towelSort());
