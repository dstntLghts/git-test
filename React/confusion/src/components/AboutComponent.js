import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <p>Leader {leader.name}</p>
        );
    });

    // function RenderMenuItem({mate, onClick}) {

    //     return (
    //         <Card>
    //             <Link to={`/menu/${mate.id}`} >


    //                     fix this 
    //                     <div class="card">
    //                         <div class="card-header" role="tab" id="peterceo">
    //                             <h3 class="mb-0">
    //                                 <a data-toggle="collapse" data-target="#peter">
    //                                     Peter Pan <small>Chief Epicurious Officer</small>
    //                                 </a>
    //                             </h3>
    //                         </div>
    //                         <div class="collapse" id="peter" data-parent="#accordion">  
    //                             <div class="card-body">
    //                                 <p class="d-none d-sm-block">Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which <em>The Frying Pan</em> became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.</p>
    //                             </div>    
    //                         </div>
    //                     </div>


                    //      like:
                    //      <div className="col-12">
                    //      <Card>
                    //          <CardBody className="bg-faded">
                    //              <blockquote className="blockquote">
                    //                  <p className="mb-0">You better cut the pizza in four pieces because
                    //                      I'm not hungry enough to eat six.</p>
                    //                  <footer className="blockquote-footer">Yogi Berra,
                    //                  <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                    //                      P. Pepe, Diversion Books, 2014</cite>
                    //                  </footer>
                    //              </blockquote>
                    //          </CardBody>
                    //      </Card>
                    //  </div>


    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardImgOverlay>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                 </CardImgOverlay>
    //             </Link>
    //         </Card>
    //     );
    // }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    