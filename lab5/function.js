

//input
const numArr = [10, 20, 30, 70, 80, 90];
const strArr = ["apple", "banana", "cat", "dogbark"];

// Question 1
function sum(arr) {
    return arr.filter(s => s > 70).reduce((s, c) => s + c, 0);
}
console.log(sum(numArr));


// Question 2
const getNewArray = (arr) => arr.filter(s => s.length >= 5 && s.includes('a'));

console.log(getNewArray(strArr));
