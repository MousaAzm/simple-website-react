import styled from "styled-components";
import landingImg from '../../shared/images/landing-image.png';

export const HomeView = () => {
  return (
    <>
      <Bg>
        <Wrapper>
          <Row>
            <Title>
              <H1>We offer modern solutions for growing your business</H1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
            </Title>
            <ImageCol>
              <Image src={landingImg} alt="img"/>
            </ImageCol>
          </Row>
        </Wrapper>
      </Bg>
    </>
  );
};

const Bg = styled.div`
  background-color: #393e46;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15 px;
  margin-left: -15 px;
  max-width: 100%;
`;

const Title = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 12px;
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 12px;
  }
`;
const H1 = styled.h1`
  margin: 0;
  color: #fff;
  align-self: center;
`;

const ImageCol = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 12px;
  @media (min-width: 992px) {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 12px;
    margin-top: 80px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  vertical-align: middle;
`;
