const http = require("http");

const express = require("express");

const app = express();

var courses = [
    {id:1, name: "courses1"},
    {id:2, name: "courses2"},
    {id:3, name: "courses3"}
]

app.get('/', (req, res) => {
    res.send("Welcome to the page !!!");
})

app.get('/api/courses', (req,res) => {
    res.send(courses)       // courses is the above decared array !!
})
/* IMPORTANT 
app.get('/api/posts/:id', (req,res)=> {     //here :id is the route parameter, which we pass in the browser
    res.send(req.params.id);
})

app.get('/api/posts/:year/:month', (req, res) => {      
    res.send(req.query);           // here req.query is query between a period. Use /api/posts/2018/1?sortBy=name
})

*/
app.get('/api/courses/:id', (req,res) => {
    //now we will parse through the courses to find them by there ID:
    let course = courses.find(c => c.id === parseInt(req.params.id));   // here c is var, c.id will parse through arr and check with our browser params.
    if(!course) { res.status(404).send("Request not found") }
    res.send(course);
})


//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening On Port ${port}`))