const Joi = require("joi");
const http = require("http");
const express = require("express");
const { parse } = require("path");



const app = express();
app.use(express.json());

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
// app.get('/api/courses/:id', (req,res) => {
//     //now we will parse through the courses to find them by there ID:
//     let course = courses.find(c => c.id === parseInt(req.params.id));   // here c is var, c.id will parse through arr and check with our browser params.
//     if(!course) { res.status(404).send("Request not found") }
//     res.send(course);
// })

app.post('/api/courses', (req, res) => {

    // const schema = {
    //     name: Joi.string().min(3).required()
    // };

    // const result = Joi.validate(req.body, schema)
    
    // if(result.error) {
    //     res.status(404).send(result.error.details[0].message);
    //     return;
    // }

    // Instead of this method we will use the method we made in PUT request by using the function validateCourse!!

    const { error } = validateCourse(req.body);         // for it's explaination see PUT request below!!
    if(error) {     
        res.status(400).send(error.details[0].message);
        return;
    }


    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

// Creating a hardcode function for Joi Validation logic:
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}


app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        res.status(404).send("Request Not Available");
    }
    // calling the validation function:
    // const result = validateCourse(req.body); // we do not need this line any more as, we a have made object destructoring in next line.
    const { error } = validateCourse(req.body); // this equivalent to result.error

    // if(result.error) {
    //     res.status(404).send(result.error.details[0].message);
    //     return;
    // }
    if (error) {     // so, here we can use only ERROR rather than calling result.error as above
        res.status(400).send(error.details[0].message);
        return;
    }

    course.name = req.body.name;
    res.send(course);

})


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404).send("Request Not Available with this course id");
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})



//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening On Port ${port}`))