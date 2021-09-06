import React from 'react'
import './slider.scss'
export default function Slider() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img className="img-fluid " height={400} src="./image/slider1.jpg" className="d-block" alt="" />                     
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid " height={400} src="./image/slider2.png" className="d-block" alt="..." />
                       
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid" height={400} src="./image/slider3.jpg" className="d-block" alt="..." />
                       
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}
