import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiSearch } from "react-icons/fi";
import { ImCart } from "react-icons/im";
import Badge from "react-bootstrap/Badge";

import TrendingFood from "../TrendingFood";

//ImCart

const LandingPage = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar  fixed="top" collapseOnSelect expand="lg" className="navigationBarBg">
        <Container fluid>
          <Navbar.Brand className="d-none d-md-flex align-items-baseline">
            <img src="./media/chef_hat.png" alt="hat" className="chefHatImg" />
            NEOFood
          </Navbar.Brand>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="order-3 order-lg-1"
          >
            <Nav className="navigationLinks m-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Menu</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
              <Nav.Link>Shop</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="searchMenu d-flex justify-content-between order-0 order-lg-2">
            <form className="d-flex me-2">
              <div className="d-flex align-items-center rounded-pill searchBox shadow">
                <FiSearch size={24} />
                <input
                  className="form-control border-0 bg-transparent"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="d-none d-sm-flex">
                  <ImCart size={24} />
                  <sup>
                    <Badge
                      bg="danger"
                      className="align-self-start ms-2 rounded-circle"
                    >
                      3
                    </Badge>
                  </sup>
                </div>

                <span className="visually-hidden">added cart items</span>
              </div>
            </form>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>
        </Container>
      </Navbar>

      {/* empty space */}
      <div style={{height: "120px"}}>

      </div>

      {/* Hero Container */}
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
      <TrendingFood />
      
    </>
  );
};

export default LandingPage;
