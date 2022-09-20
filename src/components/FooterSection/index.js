import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import { BsInstagram} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';




const FooterSection = () => {
  return (
    <>
      <div className="footerBackgroundContainer">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="imageContainer">
                <img
                  src="./media/burger.png"
                  alt="burger"
                  className="imageStyle"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="subscribeHead">Subscribe to our newsletter</p>
              <form>
                <div className="d-flex emailSentSection">
                  <input
                    type="email"
                    className="form-control bg-transparent border-0 border-bottom rounded-0 border-secondary text-white"
                    id="inputEmail"
                    placeholder="Email Address"
                  />
                  <button className="emailSentBtn">
                    <img src="./media/rightArrow.png" alt="rArrow" />
                  </button>
                </div>
              </form>
            </Col>
            <Col>
              <ul className="ServicesList text-white">
                <li>Services</li>
                <li>Email Marketing</li>
                <li>Campaigns</li>
                <li>Branding</li>
                <li>Offline</li>
              </ul>
            </Col>
            <Col>
              <ul className="AboutList text-white">
                <li>About</li>
                <li>Our Story</li>
                <li>Benefits</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col>
              <ul className="AboutList text-white">
                <li>Help</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="d-flex flex-column flex-lg-row justify-content-between">
                <div className="BottomText text-white d-flex">
                  <p>Terms &#x26; Conditions</p>
                  <p>Privacy Policy</p>
                </div>
                <div className="logoContainer text-white">
                    <i><FaFacebookF size={18}/></i>
                    <i><BsInstagram size={18}/></i>
                    <i><BsTwitter size={18}/></i>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FooterSection;
