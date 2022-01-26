const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "shubham",
  database: "food_category",
});

app.post("/search", (req, res) => {
  const Name = req.body.Name;
  const Category = req.body.Category;
  const Ingredients = req.body.Ingredients;
  const Recipe = req.body.Recipe;
  const Video_link = req.body.Video_link;

  db.connect(function (err) {
    if (err) throw err;
    db.query(
      "INSERT INTO food_data (Name,Category,Ingredients,Recipe,Video_link) VALUES (?,?,?,?,?)",
      function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      }
    );
  });


  app.getName = (Name, result)=>{
    db.query('SELECT * FROM food_data WHERE first_name LIKE ?', Name+'%', (err, res)=>{
        if(err){
            console.log('Error while fetching food by name', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
  }

});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});

