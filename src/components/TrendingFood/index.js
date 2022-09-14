import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Axios from "axios";
import "./index.css";

const TrendingFood = () => {
    const n = 5;
  const [foodItem, setFoodItem] = useState([]);

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

  useEffect(() => {
    randomTrendingFood();
  }, []);

  return (
    <>
      <Container fluid>
        <h2 className="headingText">Todays Trending Food</h2>
        <Row>
          <Col className="mt-3 mb-3">
            {foodItem.length === 0 ? (
              ""
            ) : (
              <>
                <div className="d-flex flex-column flex-lg-row">
                  <div className="foodImageContainer">
                    <img src={foodItem[0].image} alt="food" />
                  </div>

                  <div className="trendingContainer">
                    <h3>{foodItem[0].title}</h3>
                    <p>${foodItem[0].pricePerServing}</p>
                    <div>
                        {
                            [...Array(n)].map((e, i) => <img  key={i} src="./media/ratingstar.png" alt="s" style={{width: "21px", paddingLeft: "4px"}}/>)
                        }
                    </div>
                  </div>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TrendingFood;
