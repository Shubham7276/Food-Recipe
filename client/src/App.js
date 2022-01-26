
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Veg from './components/Veg';   
import Nonveg from './components/Nonveg';
import recipe from './components/recipe';
import { useState } from "react";
import Axios from 'axios';            
import { Link } from "react-router-dom"


const App = () => {

  const [Name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const [Recipe, setRecipe] = useState("");
  const [Video_link, setVedeo_link] = useState("");

  // Search function
  const searchRecipe = () => {
    Axios.post("http://localhost:3001/api/search", {
      Name: Name,
      Category: Category,
      Ingredients: Ingredients,
      Recipe: Recipe,
      Video_link: Video_link,

    }).then(() => {
      
    });
  };



  return (

    <>
     <Router>
       
           {/*________________Navigation Bar_________________*/}

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="./Navbar">Food Recipe</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/Veg">Veg</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/Nonveg">Non-Veg</Link>
                  </li>
                  
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <Link button className="btn btn-outline-success" type="submit" onClick={searchRecipe} to="/recipe">Search</Link>
                </form>
              </div>
            </div> 
          </nav>
   

          {/*___________link on componant_______________*/}
    
        <Switch> 
          <Route exact path="/Nonveg" component={Nonveg}/>  
          <Route exact path="/Veg" component={Veg}/>
          <Route exact path="/recipe" component={recipe}/>
          <img src={require('./FoodRec.jpg')} className='img1'></img>
        </Switch>
        </Router>
 
        
        
    </>
  );
}

export default App;

