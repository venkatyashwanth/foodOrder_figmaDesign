import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Axios from "axios";
import { addItem, removeItem } from "../../features/addToCart/cartSlice";

import "./styles.css";

const TrendingFood = () => {
  const dispatch = useDispatch();

  const n = 5; //stars hard coded.
  const [foodItem, setFoodItem] = useState([]);
  const [indCartItem, setIndCartItem] = useState(0);

  const randomTrendingFood = async () => {
    const check = localStorage.getItem("trending");

    if (check) {
      setFoodItem(JSON.parse(check));
      console.log(check);
    } else {
      const response = await Axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
      );

      localStorage.setItem("trending", JSON.stringify(response.data.recipes));
      setFoodItem(response.data.recipes);
    }
  };

  // const orderQuantity = useSelector((state) => state.cart.numOfOrders);

  // const itemsInCart = useSelector((state)=>state.cart.cartItems[0].cartQuantity)
  const itemsInCart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    itemsInCart.forEach((item) => {
      console.log(item.id);
      if (item.id === foodItem[0].id) {
        setIndCartItem(item.cartQuantity);
      } else {
        setIndCartItem(0);
      }
    });
  });

  useEffect(() => {
    randomTrendingFood();
  }, []);

  const handleAddToCart = (addedItem) => {
    dispatch(addItem(addedItem));
  };

  const handleRemoveFromCart = (removedItem) => {
    dispatch(removeItem(removedItem));
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <h2 className="headingText">Todays Trending Food</h2>
          </Col>
          {/* <Col xs={12}>
            
          </Col> */}
        </Row>
        <Row>
            {foodItem.length === 0 ? (
              ""
            ) : (
              <Col>
              <div className="d-flex flex-column flex-lg-row">
                <div className="foodImageContainer">
                  <img src={foodItem[0].image} alt="food" />
                </div>

                <div className="trendingContainer">
                  <div>
                    <h3>{foodItem[0].title}</h3>
                    <p>${foodItem[0].pricePerServing}</p>
                    <div>
                      {[...Array(n)].map((e, i) => (
                        <img
                          key={i}
                          src="./media/ratingstar.png"
                          alt="s"
                          style={{ width: "21px", paddingLeft: "4px" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="d-inline-block me-3">
                      Select Quantity:
                    </span>

                    <div className="btn-group" role="group" aria-label="...">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleRemoveFromCart(foodItem[0])}
                      >
                        -
                      </button>
                      <button type="button" className="btn btn-light">
                        {indCartItem}
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(foodItem[0])}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </Col>
            )}
        </Row>
      </Container>
    </>
  );
};

export default TrendingFood;
