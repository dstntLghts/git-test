import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

// class Menu extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedDish: null
//         };
//     }

//     onDishSelect(dish) {
//         this.setState({selectedDish:dish});     
//     }

//     renderDish(dish) {
//         if (dish != null) {
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardImg width="30%" src={dish.image} alt={dish.name}/>
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else {
//             return(
//                 <div></div>
//             );
//         }
//     }

//     renderComments(dish) {
       
//         if (dish != null) {

//             const allcomments=dish.comments.map((sub) =>
//             {
//                 return(
//                     <div>
//                         <ul>{sub.comment}</ul>
//                         <ul> -- {sub.author}, {sub.date} </ul>
//                     </div>
//                 )
//             }
//             )
            
//             return(
//                 <div className="col-12 col-md-5 m-1">
//                     <Card>
//                         <CardBody>
//                             <CardTitle>Comments</CardTitle>
//                             <CardText>
//                                 {allcomments}
//                             </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             )
//         }
//         else {
//             return(
//                 <div></div>
//             );
//         }
//     }


//     render() {

//         const menu = this.props.dishes.map((dish) => (
//             <div key={dish.id} className="col-12 col-md-5 m-1">
//                 <Card onClick={() => this.onDishSelect(dish)}>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardImgOverlay>
//                         <CardTitle>
//                             {dish.name}
//                         </CardTitle>
//                     </CardImgOverlay>
//                 </Card>
//             </div>
//         ));

//         return(
//             <div className="container">
//                 <div className="row">
//                     {menu}
//                     {this.renderDish(this.state.selectedDish)}
//                     {this.renderComments(this.state.selectedDish)}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Menu;
