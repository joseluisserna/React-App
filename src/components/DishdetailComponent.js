import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
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
  //arreglar
  renderComments(comment) {
    if (comment != null) {
      if (comment.comments.length > 0) {
        var listComment = comment.comments.map((com) => {
          const date = new Date(com.date);
          var date2 = date.toDateString();
          var date3 = date2.split(" ");
          var formatDate = date3[1] + " " + date3[2] + ", " + date3[3];
          return (
            <div key={com.id} className="col-12 col-md-5 m-1">
              <ul className="list-unstyled w-100">
                <li>{com.comment}</li>
                <li className="mt-3">
                  -- {com.author}, {formatDate}
                </li>
              </ul>
            </div>
          );
        });
        return (
          <div>
            <div className="col-12 col-md-5 mt-1 m-1">
              <h4>Comments</h4>
            </div>
            <div>{listComment}</div>
          </div>
        );
      } else {
        return <div></div>;
      }
    } else {
      return <div></div>;
    }
  }

  render() {
    const dishdetail = this.props.selectedDish;
    return (
      <div className="container">
        <div className="row">
          {this.renderDish(dishdetail)} {this.renderComments(dishdetail)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
