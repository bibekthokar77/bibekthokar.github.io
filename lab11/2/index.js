const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    // fs.readFile("./img.jpeg", (err, data) => {
    //     if (err) throw err;
    //     res.end(data)
    // })

    // const data = fs.createReadStream("./img.jpeg");
    // data.on('data', function (chunk) {
    //     res.end(chunk)
    // })

    const data = fs.createReadStream("./img.jpeg");
    data.pipe(res);
});


server.listen(4000, () => {
    console.log(`Server started at 4000`);
})