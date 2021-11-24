import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import aboutImg from "../../shared/images/about-us.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const AboutView = () => {
  return (
    <>
      <Bg>
        <Container className="">
          <Title className="text-center pt-4 pb-5">About Us</Title>
          <Row>
            <Col className="col-12 col-lg-6">
              <TextTitle>
                <H3>There are many variations of passages of lorem ipsum </H3>
                <P>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                </P>
              </TextTitle>
              <DivBtn>
                <Button type="button">Read More</Button>
              </DivBtn>
            </Col>
            <Col className="col-12 col-lg-6">
              <Image src={aboutImg} alt="img" />
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
    padding-top:200px;
  }
`;

const Title = styled.h2`
  margin: 20px auto;
  color: #3f3d56;
  text-transform: uppercase;
`;
const TextTitle = styled.div`
  margin: auto;
`;
const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #012970;
  margin: 0;
  padding-bottom: 10px;
`;

const P = styled.p`
  margin: 15px 0 30px 0;
  color: #444444;
`;
const DivBtn = styled.div`
  margin: 15px 2px;
  padding: 10px 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
