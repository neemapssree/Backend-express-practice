const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json({message : "Welcome" });
});
app.get("/movies", (req, res) => {    
    const data = [
        [{ moviename: "Barbie", year: "2023", genre: "entertain" }],
        [{ moviename: "Alexander", year: "2020", genre: "action" }],
        [{ moviename: "Seetha Ramam", year: "2020", genre: "romantic" }],
      ];
    // var mymovies = '["Barbie", "Alexander", "Seetha ramam"]';
    // var jsonmovies = JSON.parse(mymovies);            //parsing the data to json format
    // res.json({jsonmovies});
    res.json({data});
    
});

app.get("/movies/barbie", (req, res) => {
    res.json({moviename : "Barbie", Year :2023, IMDB: "6.3" });
});

app.get("/result", (req, res) => {
    const resultData = '[{"result": "pass", "mark": "70%"}]';
    result = JSON.parse(resultData);
    res.json(result);                        //passing the result directly to hide the array name from response.
});

app.post("/signup", (req, res) => {
    const data = {
        name: "neemapssree123@gmail.com",
        password: "neema123",
    };
    console.log(req.body);
    // res.json({ message:"User logged in" });
    if (data.name === req.body.email && data.password === req.body.password)
    {
        res.json({message: `user ${req.body.email} is validated`});
    }
    else
    {
        res.json({message: "invalid user"});
    }

});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});