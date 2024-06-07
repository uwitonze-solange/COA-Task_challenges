const inputArray = () => {
    const input = prompt("Enter array elements with spaces: ");
    return input.split(" ").map(Number);
}

const getTarget = () => {
    return parseInt(prompt("Enter the target sum: "));
}

const calculateSum = (arr) => {
    return arr.reduce((x, y) => x + y, 0);
}

const checkTargetSum = (arr, target) => {
    const sumOfArrays = calculateSum(arr);
    return target === sumOfArrays;
}

const main = () => {
    const arr = inputArray();
    const target = getTarget();
    const result = checkTargetSum(arr, target);
    console.log('result: ' + result);
}
main();