const numbers = [1,2,3,4,5];

const calculateMean = (arr) => {
    const sum = arr.reduce((acc, el) => acc + el, 0);
    const arrayLength = arr.length;

    return sum / arrayLength;
}

console.log(calculateMean(numbers));