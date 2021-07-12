import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

//Function to render all the dishes of the menu using cards... from reactstrap
function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

//Rendering the menu using functional component, and using props from MainComponent
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  //Return the view of the menu using the class container and row from reactstrap
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
