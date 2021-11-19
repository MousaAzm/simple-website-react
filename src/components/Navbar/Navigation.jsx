import { useNavigate } from "react-router";
import RoutingPath from "../../routes/RoutingPath";
import styled from "styled-components";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <Wrapper>
            <Logo onClick={() => navigate(RoutingPath.homeView)}>Logo</Logo>
            <div>
              <Ul>
                <Li>
                  <Span onClick={() => navigate(RoutingPath.homeView)}>
                    Home
                  </Span>
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
            </div>
        </Wrapper>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
	align-items: center;
	justify-content: space-between;
	background-color: #222831;
	padding: 0.5rem 0;
`;

const Wrapper = styled.div`
  width: 1170px;
	 position: relative;
	 margin-left: auto;
	 margin-right: auto;
	 padding-left: 15px;
	 padding-right: 15px;
	 display: flex;
	 flex-wrap: wrap;
	 align-items: center;
	 justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 6px 0; 
  float:right;
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
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  transition: 0.3s;
  text-decoration: none;
  color: #fff;
	display: inline-block;
  &:hover{
    color: #18d26e;
    transition: 0.3s;
  }
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #18d26e;
`;
