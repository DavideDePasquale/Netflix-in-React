import { Button, Col, Row } from "react-bootstrap";
import { Facebook } from "react-bootstrap-icons";
import { Instagram } from "react-bootstrap-icons";
import { Twitter } from "react-bootstrap-icons";
import { Youtube } from "react-bootstrap-icons";

function Footer() {
  return (
    <>
      <div className="px-4">
        <footer>
          <Row className="justify-content-center mt-5">
            <Col xs={6}>
              <Row>
                <Col className=" mb-2">
                  <Facebook className="mx-2" style={{ color: "#adb5bd3b" }} />
                  <Instagram className="mx-2" style={{ color: "#adb5bd3b" }} />
                  <Twitter className="mx-2" style={{ color: "#adb5bd3b" }} />
                  <Youtube className="mx-2" style={{ color: "#adb5bd3b" }} />
                </Col>
              </Row>
              <Row xs={1} sm={2} md={4} lg={4}>
                <Col>
                  <Row>
                    <Col className=" footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Audio and Subtitles
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Media Center
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Privacy
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Contact us
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Audio Description
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Investor Relations
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Legal Notices
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Help Center
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Jobs
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Cookie Preferences
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col className="footer-links">
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Gift Cards
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Terms of Use
                        </a>
                      </p>
                      <p>
                        <a
                          href="#"
                          alt="footer link"
                          className="text-decoration-none fontSpecial2"
                          style={{ color: "#adb5bd3b" }}
                        >
                          Corporate Information
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col className="mb-2">
                  <Button
                    type="button"
                    className="btn-sm footer-button rounded-0 mt-3 bg-transparent border-1"
                    style={{ borderColor: "#adb5bd3b", color: "#adb5bd3b" }}
                  >
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col
                  className=" mb-2 mt-2 copyright fontSpecial"
                  style={{ color: "#adb5bd3b" }}
                >
                  © 1997-2023 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      </div>
    </>
  );
}
export default Footer;
