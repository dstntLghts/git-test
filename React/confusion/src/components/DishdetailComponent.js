import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    
function RenderDish({dish}) {
        
        if (dish!= null) {
            return(
                <div class="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="30%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
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

    function RenderComments({dish}) {
        if (dish != null) {

            const allcomments=dish.map((sub) =>
            {
            return(
                <div>
                    <ul>{sub.comment}</ul>
                    <ul> -- {sub.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(sub.date)))}</ul>
                </div>
                )}
            )
            
            return(
                <div class="container">
                    <div className="row">
                        <div className="container col-12 col-md-5 m-1">
                            <h3>Comments</h3>
                            {allcomments}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div></div>
        );}
    }

    const DishDetail = (props) => {
         
        return (
            <div className="container">
                <div className="row">
                    {/* <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>  */}
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.comments} />               
                </div>
                    
            </div>
        );
    }

export default DishDetail;