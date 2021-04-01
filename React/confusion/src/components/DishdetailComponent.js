import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Col, Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody, Label, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class DishDetail extends Component {

    constructor(props){

        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {

        const CommentForm() {

            return(
                <React.Fragment>
                    <div className="container">
                        <Button outline >
                                <span className="fa fa-pencil fa-lg">Submit Comment</span>
                        </Button>
                    </div>
                </React.Fragment>
            )
        }
        //         <React.Fragment> 
        //             <div className="container">
        //                 <Button outline onClick={this.toggleModal}>
        //                     <span className="fa fa-sign-in fa-lg">Log In</span>
        //                 </Button> 
        //             </div>
        //             <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        //                 <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        //                 <ModalBody>
        //                 <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        //                             <Row className="form-group">
        //                                 <Label htmlFor="firstname" md={2}>First Name</Label>
        //                                 <Col md={10}>
        //                                     <Control.text model=".firstname" id="firstname" name="firstname"
        //                                         placeholder="First Name"
        //                                         className="form-control"
        //                                         validators={{
        //                                             required, minLength: minLength(3), maxLength: maxLength(15)
        //                                         }}
        //                                         />
        //                                     <Errors
        //                                     className="text-danger"
        //                                     model=".firstname"
        //                                     show="touched"
        //                                     messages={{
        //                                         required: 'Required',
        //                                         minLength: 'Must be greater than 2 characters',
        //                                         maxLength: 'Must be 15 characters or less'
        //                                     }}
        //                                  />
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Label htmlFor="lastname" md={2}>Last Name</Label>
        //                                 <Col md={10}>
        //                                     <Control.text model=".lastname" id="lastname" name="lastname"
        //                                         placeholder="Last Name"
        //                                         className="form-control"
        //                                         validators={{
        //                                             required, minLength: minLength(3), maxLength: maxLength(15)
        //                                         }}
        //                                         />
        //                                         <Errors
        //                                         className="text-danger"
        //                                         model=".lastname"
        //                                         show="touched"
        //                                         messages={{
        //                                             required: 'Required',
        //                                             minLength: 'Must be greater than 2 characters',
        //                                             maxLength: 'Must be 15 characters or less'
        //                                         }}
        //                                      />
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
        //                                 <Col md={10}>
        //                                     <Control.text model=".telnum" id="telnum" name="telnum"
        //                                         placeholder="Tel. Number"
        //                                         className="form-control"
        //                                         validators={{
        //                                             required, minLength: minLength(3), maxLength: maxLength(15), isNumber
        //                                         }}
        //                                     />
        //                                     <Errors
        //                                     className="text-danger"
        //                                     model=".telnum"
        //                                     show="touched"
        //                                     messages={{
        //                                         required: 'Required',
        //                                         minLength: 'Must be greater than 2 numbers',
        //                                         maxLength: 'Must be 15 numbers or less',
        //                                         isNumber: 'Must be a number'
        //                                     }}
        //                                  />
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Label htmlFor="email" md={2}>Email</Label>
        //                                 <Col md={10}>
        //                                     <Control.text model=".email" id="email" name="email"
        //                                         placeholder="Email"
        //                                         className="form-control" 
        //                                         validators={{
        //                                             required, validEmail
        //                                         }}
        //                                     />
        //                                     <Errors
        //                                     className="text-danger"
        //                                     model=".email"
        //                                     show="touched"
        //                                     messages={{
        //                                         required: 'Required',
        //                                         validEmail: 'Invalid Email Address'
        //                                     }}
        //                                  />
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Col md={{size: 6, offset: 2}}>
        //                                     <div className="form-check">
        //                                         <Label check>
        //                                             <Control.checkbox model=".agree" name="agree"
        //                                                 className="form-check-input"
        //                                                 /> {' '}
        //                                                 <strong>May we contact you?</strong>
        //                                         </Label>
        //                                     </div>
        //                                 </Col>
        //                                 <Col md={{size: 3, offset: 1}}>
        //                                     <Control.select model=".contactType" name="contactType"
        //                                         className="form-control">
        //                                         <option>Tel.</option>
        //                                         <option>Email</option>
        //                                     </Control.select>
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Label htmlFor="message" md={2}>Your Feedback</Label>
        //                                 <Col md={10}>
        //                                     <Control.textarea model=".message" id="message" name="message"
        //                                         rows="12"
        //                                         className="form-control" />
        //                                 </Col>
        //                             </Row>
        //                             <Row className="form-group">
        //                                 <Col md={{size:10, offset: 2}}>
        //                                     <Button type="submit" color="primary">
        //                                     Send Feedback
        //                                     </Button>
        //                                 </Col>
        //                             </Row>
        //                     </LocalForm>
        //                 </ModalBody>
        //             </Modal>
        //         </React.Fragment>
        //     );

        const RenderDish({dish}) {
            
            if (dish!= null) {
                return(
                    <div>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dish.name}</h3>
                        </div>
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

        const RenderComments({dish}) {
            if (dish != null) {

                const commentForm = () => {
                    <div>
                        <h3>Comments</h3>
                        
                    </div>
                }

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
                    <div>
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

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} /> 
                    </div> 
                    <div className="col-sm col-12 col-md-5 m-1">
                        <RenderComments dish={props.comments} />  
                        <CommentForm/> 
                    </div> 
                </div>
            </div>
        );
    }
}
export default DishDetail;