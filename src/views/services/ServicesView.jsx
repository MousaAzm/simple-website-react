import styled from "styled-components";
import { CardBox } from "../../components/Card/CardBox";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
export const ServicesView = () => {
  return (
    <>
      <Bg>
        <Container>
          <Title>Services</Title>
          <Row>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-blue">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
            </Col>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-orange">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
            </Col>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-green">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
            </Col>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-red">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
            </Col>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-purple">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
            </Col>
            <Col className="mt-4" lg={4} md={6}>
              <CardBox boxColor="box-pink">
                <H3>Lorem Ipsum</H3>
                <P>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </P>
              </CardBox>
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
  justify-items: center;
  justify-content: center;
  padding-top: 98px;
`;

const Title = styled.h2`
  margin: 20px auto;
  color: #3f3d56;
  text-transform: uppercase;
  text-align: center;
`;
const H3 = styled.h3`
  padding: 10px 0;
`;
const P = styled.p`
  margin: 10px 0;
`;
