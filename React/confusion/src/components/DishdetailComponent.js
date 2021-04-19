import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Label, Row, InputGroup, InputGroupAddon, InputGroupText, Input  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class DishDetail extends Component {

    constructor(props){

        super(props);
        this.state = {
            isModalOpen: false
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
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {

        const CommentForm = () => {

            return(
                <React.Fragment>
                    <div className="container">
                        <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-pencil fa-lg">Submit Comment</span>
                        </Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                        <Row className="form-group">
                                            <Label htmlFor="rating" md={2}>Your Rating</Label>
                                            <Col md={10}>
                                                <Control.select model=".rating" id="rating" name="rating"
                                                    placeholder="Your Rating" className="form-control">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                </Control.select>
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="yourname" md={2}>Your Name</Label>
                                            <Col md={10}>
                                                <Control.text model=".author" id="author" name="author"
                                                    placeholder="Your Name"
                                                    className="form-control"
                                                    validators={{
                                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                                    }}
                                                    />
                                                    <Errors
                                                    className="text-danger"
                                                    model=".lastname"
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
                                            <Label htmlFor="comment" md={2}>Comment</Label>
                                            <Col md={10}>
                                                <Control.textarea model=".comment" id="comment" name="comment"
                                                    rows="6"
                                                    className="form-control" />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Col md={{size:10, offset: 2}}>
                                                <Button type="submit" color="primary">
                                                Submit
                                                </Button>
                                            </Col>
                                        </Row>
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
                        <Card>
                            <CardImg width="30%" src={baseUrl + props.dish.image} alt={props.dish.name}/>
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
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

        const RenderComments= (props) => {
            if (props.dish != null) {

                const commentForm = () => {
                    <div>
                        <h3>Comments</h3>
                        
                    </div>
                }

                const allcomments=props.dish.map((sub) =>
                {
                return(
                    <div>
                        <ul>{sub.comment}</ul>
                        <ul> -- {sub.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(sub.date)))}</ul>
                    </div>
                    )}
                )
                
                return(
                    <div>
                        <h3>Comments</h3>
                        {allcomments}
                        <div className="container">
                             <CommentForm/>
                        </div>
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