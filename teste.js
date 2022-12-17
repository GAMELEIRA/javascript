function miniMaxSum(arr) {
    const valueMin = Math.min(...arr);
    const valueMax = Math.max(...arr);
    const total = sumNumbers(arr);
    console.log(valueMin, valueMax, total);
    console.log(sumMin(total, valueMin), sumMin(total, valueMax));
};

const sumNumbers = arr => arr.reduce((acc, currentValue) => acc + currentValue);

const sumMin = (total, valueMin) => total - valueMin;

const sumMax = (total, numberMax) => total - numberMax;

miniMaxSum([1,2, 3]);