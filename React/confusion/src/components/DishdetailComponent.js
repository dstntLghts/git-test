import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Label, Row, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
import {FadeTransform, Fade, Stagger} from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            dishId: this.props.dishId
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.comment, values.author);
    }

    render() {
        
        const CommentForm = () => {

            return(
                <React.Fragment>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-pencil fa-lg">Submit Comment</span>
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Col>
                                                <Label htmlFor="rating">Your Rating</Label>
                                                <Control.select model=".rating" id="rating" name="rating"
                                                    placeholder="Your Rating" className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Label htmlFor="author">Your Name</Label>
                                                <Control.text model=".author" id="author" name="author"
                                                    placeholder="Your Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                    <Errors
                                                    className="text-danger"
                                                    model=".author"
                                                    show="touched"
                                                    messages={{
                                                        required: 'Required',
                                                        minLength: 'Must be greater than 2 characters',
                                                        maxLength: 'Must be 15 characters or less'
                                                    }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col>
                                                <Label htmlFor="comment">Comment</Label>
                                                <Control.textarea model=".comment" id="comment" name="comment" rows="6"
                                                    className="form-control" />
                                            </Col>
                                        </Row>
                                        <Button type="submit" color="primary" >Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>                  
                </React.Fragment>
            )
        }

        const RenderDish= (props) => {
            
            if (props.isLoading) {
                return(
                    <div className="container">
                        <div className="row">
                            <Loading />
                        </div>
                    </div>
                );
            }
            else if (props.errMess) {
                return(
                    <div className="container">
                        <div className="row">
                            <h4>{props.errMess}</h4>
                        </div>
                    </div>
                );
            }
            else if (props.dish!= null) {
                return(
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                        </div>
                        <FadeTransform in transformProps={{exitTransform: 'scale(0.5) transleteY(-50%)'}}>
                            <Card>
                                <CardImg width="30%" src={baseUrl + props.dish.image} alt={props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{props.dish.name}</CardTitle>
                                    <CardText>{props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </FadeTransform>
                    </div>    
                )
            }
            else {
                return(
                    <div></div>
                );
            }
        }

        const RenderComments= (props) => {
            if (props.dish != null) {

                const allcomments=props.dish.map((sub) =>
                {
                return(
                    <Fade in>
                    <div>
                        <ul>{sub.comment}</ul>
                        <ul> -- {sub.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(sub.date)))}</ul>
                    </div>
                    </Fade>
                    )}
                )
                
                return(
                    <div>
                        <h3>Comments</h3>
                        <Stagger in>
                            {allcomments}
                            <div className="container">
                                <CommentForm/>
                            </div>
                        </Stagger>
                    </div>
                )
            }
            else {
                return(
                    <div></div>
            );}
        }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish} /> 
                    </div> 
                    <div className="col-sm col-12 col-md-5 m-1">
                        <RenderComments dish={this.props.comments}/>  
                    </div> 
                </div>
            </div>
        );
    }
}
export default DishDetail;