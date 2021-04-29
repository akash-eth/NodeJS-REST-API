const { json } = require("express");
const http = require("http");


// var server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.write("Welcome to the page");
//         res.end();
//     }

//     if (req.url === "/api/courses") {
//         res.write(JSON.stringify(["DSA", "TOC", "OOPs"]))
//         res.end();
//     }

// })

// server.listen(3000);

// console.log(`
//         Listening at port 3000
//     `);

var server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.write("Ypu are welcome");
        res.end();
    }

    if(req.url === "/api/courses") {
        res.write(JSON.stringify(['DSA', 'TOC', 'CGM']));
        res.end();
    }

})

server.listen(3000);

console.log('Listening at 3000');