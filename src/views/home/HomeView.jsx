import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import heroImg from "../../shared/images/hero-img.png";
import heroBgImg from "../../shared/images/hero-bg.png";
import "bootstrap/dist/css/bootstrap.min.css";

export const HomeView = () => {
  return (
    <>
      <Bg>
        <Container>
          <Row>
            <Col
              className="d-flex flex-column justify-content-center pt-4 pt-md-0 order-2 order-lg-1"
              md={12}
              lg={6}
              sm={12}>
              <Title>
                <H1>There are many variations of passages of lorem ipsum </H1>
                <H2>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </H2>
              </Title>
              <DivBtn>
                <Button type="button">Get Started</Button>
              </DivBtn>
            </Col>
            <Col className="order-1 order-lg-2" md={12} lg={6} sm={12}>
              <Image src={heroImg} alt="img" />
            </Col>
          </Row>
        </Container>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 65px;
  background: url(${heroBgImg}) top center no-repeat;
`;

const Title = styled.div`
  margin: 2px;
`;
const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #012970;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const H2 = styled.h2`
  margin: 15px 0 0 0;
  font-size: 26px;
  color: #444444;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
`;
const DivBtn = styled.div`
  margin: 15px 2px;
  padding: 10px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
