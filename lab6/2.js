// Interval Way
function printNumbers(from, to) {
    let current = from;
    let timerId = setInterval(() => {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(10, 20)


// Timeout way
// const printNumbers = (from, to) => {
//     if (from > to) {
//         return false;
//     }
//     setTimeout(() => {
//         console.log(from);
//         from++;
//         if (from <= to) {
//             printNumbers(from, to);
//         }
//     }, 1000);
// }


// printNumbers(10, 20);
