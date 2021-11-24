import styled from "styled-components";
import { Form } from "../../components/Formgroup/Form";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactView = () => {
  return (
    <>
      <Bg>
        <Container className="pt-4 pb-4">
          <H2 className="pt-5">Contact</H2>
          <P>
            The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </P>
          <Row>
            <Col lg={6}>
              <Row>
                <Col md={12}>
                  <InfoBox>
                    <H4>Address : </H4>
                    <P>Vasagatan 1, 405 30 Göteborg</P>
                  </InfoBox>
                </Col>
                <Col md={6}>
                  <InfoBox>
                    <H4>Call Us : </H4>
                    <P>0046 54651645</P>
                  </InfoBox>
                </Col>
                <Col md={6}>
                  <InfoBox>
                    <H4>Email Us : </H4>
                    <P>support@info.se</P>
                  </InfoBox>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Form></Form>
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
  justify-content: center;
  @media (max-width: 992px) {
    margin-top: 215px;
  }
`;

const InfoBox = styled.div`
  background-color: #f2f5fc;
  padding: 27px;
  margin-bottom: 28px;
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);
`;

const H2 = styled.h2`
  text-align: center;
  margin: 0 25px;
  color: #3f3d56;
`;

const H4 = styled.h4`
  text-align: center;
  font-size: 18px;
  color: #012970;
  font-weight: 700;
  margin: 20px 0 10px 0;
`;

const P = styled.p`
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin: 12px 0;
  padding: 12px 0;
  text-align: center;
  color: #8e8d8d;
`;
