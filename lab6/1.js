function makeArmy() {
    const shooters = [];
    let i = 0;
    while (i < 10) {
        let shooter = function (j) {
            console.log(j);
        };
        shooters.push(shooter(i));
        i++;
    }
    return shooters;
}

let army = makeArmy();

army.forEach(s => s)