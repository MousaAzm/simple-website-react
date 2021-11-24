import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import styled from "styled-components";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Container className="d-flex align-items-center pt-2">
          <Logo onClick={() => navigate(RoutingPath.homeView)}>
            <Rspan>L</Rspan>o<Rspan>g</Rspan>o
          </Logo>
          <Nav className="ml-auto">
            <Ul>
              <Li>
                <Span onClick={() => navigate(RoutingPath.homeView)}>Home</Span>
              </Li>
              <Li>
                <Span onClick={() => navigate(RoutingPath.aboutView)}>
                  About
                </Span>
              </Li>
              <Li>
                <Span onClick={() => navigate(RoutingPath.servicesView)}>
                  Services
                </Span>
              </Li>
              <Li>
                <Span onClick={() => navigate(RoutingPath.contactView)}>
                  Contact
                </Span>
              </Li>
            </Ul>
          </Nav>
        </Container>
      </Header>
    </>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  height: 70px;
  z-index: 99;
  box-shadow: 0px 2px 20px rgb(1 41 112 / 10%);
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-top: 15px;
`;

const Li = styled.li`
  list-style-type: none;
  padding-left: 30px;
  align-items: center;
`;

const Span = styled.span`
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  transition: 0.3s;
  text-decoration: none;
  color: #012970;
  display: inline-block;
  &:hover {
    color: #4154f1;
    transition: 0.3s;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: #012970;
  cursor: pointer;
  text-transform: uppercase;
  padding-bottom: 7px;
`;

const Rspan = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: #4154f1;
  cursor: pointer;
`;
