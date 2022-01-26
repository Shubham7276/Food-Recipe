import React from "react";
import { Link } from "react-router-dom"

class Veg extends React.Component {
  state = {};
  render() {
    return (
      <>
        
        
          
            <div class="row">
              <div class="col-3">
                <Link to ="/recipe"> <img src={require("./photos/lasagne.jpg")}></img></Link>
                <h5>Easy vegetable lasagne</h5>
              </div>
              <div class="col-3">
                <img src={require("./photos/chilli.jpg")}></img>
                <h5>Vegetarian chilli</h5>
              </div>
              <div class="col-3">
                <img src={require("./photos/fried-rice.jpg")}></img>
                <h5>Thai fried prawn & pineapple rice</h5>
              </div>
            </div>


            <div class="row">
              <div class="col-3">
                <img src={require("./photos/goan.jpg")}></img>
                <h5>Goan-style vegetable curry with kitchari</h5>
              </div>
              <div class="col-3">
              <img src={require("./photos/tortilla.jpg")}></img>
                <h5>Spinach & sweet potato tortilla</h5>
              </div>
              <div class="col-3">
                <img src={require("./photos/squid-salad.jpg")}></img>
                <h5>Barbecued squid salad</h5>
              </div>
            </div>
          
    
      </>
    );
  }
}

export default Veg;
