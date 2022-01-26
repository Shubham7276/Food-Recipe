import React from "react";

class Nonveg extends React.Component {
  state = {};
  render() {
    return (
      <>
        

        <div class="row">
          <div class="col-3">
            <img src={require("./photos/batterchiken.jpg")}></img>
            <h5>Easy butter chicken</h5>
          </div>
          <div class="col-3">
            <img src={require("./photos/creamy.jpg")}></img>
            <h5>Creamy chicken, squash & pecan pasta</h5>
          </div>
          <div class="col-3">
            <img src={require("./photos/easy-curry.jpg")}></img>
            <h5>Easy chicken curry</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-3">
            <img src={require("./photos/chicken_pasta.jpg")}></img>
            <h5>Chicken pasta bake</h5>
          </div>
          <div class="col-3">
            <img src={require("./photos/prawn.jpg")}></img>
            <h5>Prawn tikka masala</h5>
          </div>
          <div class="col-3">
            <img src={require("./photos/bean.jpg")}></img>
            <h5>Easy chicken & bean enchiladas</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Nonveg;
