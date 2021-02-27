import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

    function RenderDish({dish}) {
        
        if (dish!= null) {
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

    function RenderComments({dish}) {
        if (dish != null) {

            const allcomments=dish.comments.map((sub) =>
            {
            return(
                <div>
                    <ul>{sub.comment}</ul>
                    <ul> -- {sub.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(sub.date)))}</ul>
                </div>
                )}
            )
            
            return(
                <div className="container col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {allcomments}
                </div>
            )
        }
        else {
            return(
                <div></div>
        );}
    }

    const DishDetail = (props) => {
         
        return(
             <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish}/>
                </div>
            </div>
        );
    }

export default DishDetail;