import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

//Function to render the name, picture, name and description of the dishes using cards... from reactstrap
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

//Function to render the comments of the dishes using list-unstyled
function RenderComments({ comment }) {
  if (comment.length > 0) {
    var listComment = comment.map((com) => {
      return (
        <div key={com.id}>
          <ul className="list-unstyled">
            <li>{com.comment}</li>
            <li className="mt-3">
              -- {com.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(com.date)))}
            </li>
          </ul>
        </div>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <div>{listComment}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

//Rendering the description and comments of the dishes using functional components, and using props from MainComponent
const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />{" "}
          <RenderComments comment={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
