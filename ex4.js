const array1 = [1,3,5];
const array2 = [2,4,6];

const combineArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must be the same length');
    }

    const newArr = [];

    for (const i in arr1) {
        newArr.push(arr1[i], arr2[i]);
    }

    return newArr;
}

console.log(combineArrays(array1, array2));