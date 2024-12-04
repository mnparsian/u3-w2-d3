import { Button, Col, Container, Row } from "react-bootstrap";
import Facebook from "../assets/logo/facebook.svg";
import Instagram from "../assets/logo/instagram.svg";
import X from "../assets/logo/x.svg";
import Youtube from "../assets/logo/youtube.svg";

const MyFooter = () => (
  <footer className="color text-center justify-content-center text-lg-start">
    <Container className="p-5">
      <div className="margin-left-md">
      <img src={Facebook} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
      <img src={Instagram} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
      <img src={X} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
      <img src={Youtube} width="40 " height="18" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </div>
       
      
      <Row className="text-secondary ps-3 justify-content-center">
        <Col xs={6} md={2}>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </Col>

        <Col xs={6} md={2}>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </Col>
        <Col xs={6} md={2}>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Prefrences</p>
        </Col>
        <Col xs={6} md={2}>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
      <div className="margin-left-md">
      <Button variant="outline-secondary" className="mb-3 rounded-0 ms-3">
        Service Code
      </Button>
      <p class="text-secondary">©️ 1997-2019 Netflix,inc.</p>
      </div>
    </Container>
  </footer>
);
export default MyFooter;
