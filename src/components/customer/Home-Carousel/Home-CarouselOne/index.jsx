import { Container } from '@mui/system';
import React from 'react';
import ProductItem from '../../ProductItem';
import "./CarouselOne.scss";

function CraouselOne(props) {
    return (
        <div  className="container-fluid profuid">
    <Container className="title-list">
    <h2>Hàng nóng</h2>
        <div className="container">
        <div className="row">
            <div className="col-md-12">

                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
                {/* <!-- Carousel indicators --> */}
                {/* <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>    */}
                {/* <!-- Wrapper for carousel items --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-sm-3">
                               <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>		
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>								
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>						
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>
                            <div className="col-sm-3">
                            <ProductItem />
                            </div>						
                        </div>
                    </div>
                </div>
                {/* <!-- Carousel controls --> */}
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
            </div>
        </div>
    </div>
    </Container>
    </div>
    );
}

export default CraouselOne;