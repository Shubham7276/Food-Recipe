import React from "react";

class recipe extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div class="row1">
          <div class="col-2">
            <img src={require("./photos/lasagne.jpg")}></img>
            <h5>Easy vegetable lasagne</h5>
          </div>
          <div class="col-1">
            <p>
              <h6>Ingredients</h6>3 red peppers, cut into large chunks 2 aubergines, cut
              into ½ cm thick slices 8 tbsp olive oil, plus extra for the dish ½
              quantity tomato sauce (see below) 300g fresh lasagne sheets ½
              quantity white sauce (see below) 125g ball mozzarella
              (orvegetarian alternative) handful of cherry tomatoes, halved
            </p>
            <p>
              <h6>STEP 1</h6>Heat the oven to 200C/180C fan/gas 6. Lightly oil two large
              baking trays and add the peppers and aubergines. Toss with the
              olive oil, season well, then roast for 25 mins until lightly
              browned. <h6>STEP 2</h6> Reduce the oven to 180C/160C fan/gas 4. Lightly
              oil a 30 x 20cm ovenproof dish. Arrange a layer of the vegetables
              on the bottom, then pour over a third of the tomato sauce. Top
              with a layer of lasagne sheets, then drizzle over a quarter of the
              white sauce. Repeat until you have three layers of pasta. <h6>STEP 3</h6>
              Spoon the remaining white sauce over the pasta, making sure the
              whole surface is covered. Scatter over the mozzarella and cherry
              tomatoes. Bake for 45 mins until bubbling and golden.
              
            </p>
            <a href="https://youtu.be/wkbYh1z82b4">Watch video How to Make Fresh Vegetable Lasagna</a>
          </div>
        </div>
      </>
    );
  }
}

export default recipe;
