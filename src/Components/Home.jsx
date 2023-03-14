import { React } from "react";
import { Card, } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { Products } from "./Products";
export const Home = () => {
    return (
        <div className="hero">
            
            <Carousel>
                
      <Carousel.Item interval={1000}>
        <img
         height={500}
          className=" w-100 "
          src=" ./assets/bg2.avif"
          alt="First slide"
        />
        {/* holder.js/800x400?text=First */}
        <Carousel.Caption>
          <h3 class="display-3 fw-bolder mb-0 text-danger">ONLINE SHOPPING</h3>
          <p className="fs- 2 text-dark">
                      CHECK OUT ALL LATEST PRODUCT
                      </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         height={500}
          className="d-block w-100"
          src="./assets/bg4.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="display-3 fw-bolder mb-0">ONLINE SHOPPING</h3>
          <p class="fs-2 text-warning"><b>
                      CHECK OUT ALL LATEST PRODUCT
                      </b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         height={500}
          className="d-block w-100"
          src="./assets/bg9.avif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="display-3 fw-bolder mb-0">ONLINE SHOPPING</h3>
          <p class="fs-2 text-warning"><b>
                      CHECK OUT ALL LATEST PRODUCT
                      </b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
        height={500}
          className="d-block w-100"
          src="./assets/imadiouslogo2.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 class="display-3 fw-bolder mb-0 ">React Developer</h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         height={500}
          className="d-block w-100"
          src="./assets/bg8.avif"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="display-3 fw-bolder mb-0">ONLINE SHOPPING</h3>
          <p class="fs-2 text-warning"><b>
                      CHECK OUT ALL LATEST PRODUCT
                      </b></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           
            <Products />
        </div>
    );
};
