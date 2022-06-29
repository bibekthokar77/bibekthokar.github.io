
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student);
//         }.bind(this));
//     }
// };
// group.showList();




let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => function () {
            console.log(this.title + ": " + student);
        }.call(this));
    }
};
group.showList();

