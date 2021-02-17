const express = require("express")

const app = express();

const courses = [
    {"id": 1, name: "course1" },
    {"id": 2, name: "course2" },
    {"id": 3, name: "course3" }
]

app.get('/', (req,res) => {
    res.send("Welcome");
  
})

app.get('/api/course/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {res.status(404).send("Not Found")}
    res.send(course);

})

app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.query);
})

const port =  process.env.PORT || 3000
app.listen(port, () => {console.log(`Listening at ${port}`);})