import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";

import TrendingFood from "../TrendingFood";
import PopularItems from "../PopularItems";
import ContactUs from "../ContactUs";
import FooterSection from "../FooterSection";

const LandingPage = () => {
  return (
    <>
      {/* empty space */}
      <div style={{ height: "120px" }}></div>
      {/* Hero Container Section */}
      <section style={{width: '100vw'}}>
      <Container fluid>
        <Row>
          <Col xl={5} className="d-flex flex-column justify-content-center">
            <div className="mb-3">
              <div className="d-flex align-items-center heroText">
                <div>
                  <h1 className="ht1">Fast</h1>
                </div>
                <div>
                  <h1 className="ht2">
                    Food <br />
                    Delivery
                  </h1>
                </div>
              </div>
              <div className="subText">
                <h2>
                  Discover the best food and drinks near you at the best quality
                  and prices
                </h2>
              </div>
            </div>

            <div>
              <div className="buttonContainer d-flex flex-column flex-sm-row align-items-center">
                <button className="orderButton rounded-pill">Order Now</button>
                <div className="d-flex align-items-center playTextButton">
                  <div className="d-inline-block playButton">
                    <span>
                      <img src="./media/play_arrow.png" alt="playBtn" />
                    </span>
                  </div>
                  <span className="playText">Watch Video</span>
                </div>
              </div>

              <div className="mt-5 starRatingBox">
                <div className="pt-2 pb-2">
                  <img
                    src="./media/stars.png"
                    alt="star"
                    style={{
                      width: "26px",
                      height: "26px",
                      paddingRight: "3px",
                    }}
                  />
                  <img
                    src="./media/stars.png"
                    alt="star"
                    style={{
                      width: "26px",
                      height: "26px",
                      paddingRight: "3px",
                    }}
                  />
                  <img
                    src="./media/stars.png"
                    alt="star"
                    style={{
                      width: "26px",
                      height: "26px",
                      paddingRight: "3px",
                    }}
                  />
                  <img
                    src="./media/stars.png"
                    alt="star"
                    style={{
                      width: "26px",
                      height: "26px",
                      paddingRight: "3px",
                    }}
                  />
                  <img
                    src="./media/stars.png"
                    alt="star"
                    style={{
                      width: "26px",
                      height: "26px",
                      paddingRight: "3px",
                    }}
                  />
                </div>
                <span className="p-0">5 star rating</span>
                <p>based on 1790 reviews</p>
              </div>
            </div>
          </Col>
          <Col xl={7} className="d-none d-xl-flex">
            <div className="ms-auto">
              <img
                src="./media/heroImage_fastfood.png"
                alt="fastfood"
                className="w-100"
                style={{ maxWidth: "750px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      </section>

      {/* Trending Food Section */}
      <TrendingFood />
      {/* Popular Items Section */}
      <PopularItems/>

      {/* Contact Us Section */}
      <ContactUs/>

      {/* Footer section */}
      <FooterSection/>
    </>
  );
};

export default LandingPage;
