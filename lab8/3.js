Array.prototype.mySort = function () {
    this.sort()
};

let list = [4, 3, 2, 6, 7, 2, 3];
list.mySort();

console.log(list);