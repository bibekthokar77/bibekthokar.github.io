const dns = require("dns");


dns.lookup('miu.edu', (err, value) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(value)
})
