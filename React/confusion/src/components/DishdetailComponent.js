import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="30%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const allcomments=dish.comments.map((sub) =>
            {
                return(
                    <div>
                        <ul>{sub.comment}</ul>
                        <ul> -- {sub.author}, {sub.date} </ul>
                    </div>
                )
            }
            )
            
            return(
                <div className="col-12 col-md-5 m-1">
                    <div>Comments</div>
                    <div>
                        {allcomments}
                    </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.data)}
                    {this.renderComments(this.props.data)}
                </div>
            </div>
        );
    }
}

export default DishDetail;