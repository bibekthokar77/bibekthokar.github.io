

const printNumbers = (from, to) => {
    if (from > to) {
        return false;
    }
    setTimeout(() => {
        console.log(from);
        from++;
        if (from <= to) {
            printNumbers(from, to);
        }
    }, 1000);
}


printNumbers(10, 20);
