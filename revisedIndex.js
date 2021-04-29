// const Joi = require('joi');
// const express = require('express');
// const app = express();

// app.use(express.json())

// var courses = [
//     {id: 1, name: 'course1'},
//     {id: 2, name: 'course2'},
//     {id: 3, name: 'course3'}
// ]

// app.get('/', (req, res) => {

//     res.send('You are welcome !!');    // res.send() => this can be called only once. Whereas, res.write() can be called numerouly
// });

// app.get('/api/courses', (req, res) => {
//     res.send(courses);
// });

// app.get('/api/courses/:courseId', (req, res) => {
//     let course = courses.find(c => c.id === parseInt(req.params.courseId));
//     if(!course) res.status(404).send(`No course availble with with this courseId`)
//     res.send(course);
// });

// app.post('/api/courses', (req, res) => {
    
//     // console.log(result);
//     /*
//         => we will use joi instead !!
//         if (!req.body.name || req.body.name.length < 3) {
//             res.status(400).send('Name is mandatory and should is of min 3 chars')
//         }
//     */
//         // Uisng the function destructor:
//         const {error} = validateCourse(req.body);
    
//         if(error) {
//             res.status(400).send(result.error.details[0].message);
//             return;
//         }
   
//     const newCourse = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(newCourse);
//     res.send(newCourse);
// });

// app.put('/api/courses/:courseId', (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.courseId));
//     if(!course) res.status(404).send(`No course availble with with this courseId`);

//     const {error} = validateCourse(req.body);
    
//     if(error) {
//         res.status(400).send(error.details[0].message);
//         return;
//     }

//     course.name = req.body.name;
//     res.send(course);
// });

// app.delete('/api/courses', (req,res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.courseId));
//     if(!course) res.status(404).send(`No course availble with with this courseId`);

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// })

// function validateCourse(course) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     return Joi.validate(course, schema);   
// }


// //PORT:

// var port = process.env.PORT || 3000;
// app.listen(port, () => {console.log(`Listening at ${port}`);})
