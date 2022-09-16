import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import "./index.css";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiSearch } from "react-icons/fi";
import { ImCart } from "react-icons/im";
import Badge from "react-bootstrap/Badge";
import { getTotals } from "../../features/addToCart/cartSlice";

const NavigationBar = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  
  const orderQuantity = useSelector((state) => state.cart.cartTotalQuantity);


  useEffect(()=> {
    dispatch(getTotals());
  },[cart])

  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="navigationBarBg"
      >
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
                      {orderQuantity}
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
    </>
  );
};

export default NavigationBar;
