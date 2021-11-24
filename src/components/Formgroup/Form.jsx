import styled from "styled-components";
import { Button } from "../Button/Button";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Form = () => {
  return (
    <>
      <Formbox>
          <Row>
            <Col className="p-3" md={6}> <Input type="text" placeholder="Your Name" className="form-control"/></Col>
            <Col className="p-3" md={6}> <Input type="email" placeholder="Your Email" className="form-control"/></Col>
            <Col className="p-3" md={12}><Input type="text" placeholder="Subject" className="form-control"/></Col>
            <Col className="p-3" md={12}><Textarea placeholder="Message" className="form-control"></Textarea></Col>      
            <Col className="text-center pt-3" md={12}><Button type="button">Send Message</Button></Col>
          </Row>
      </Formbox>
    </>
  );
};

const Formbox = styled.div `
    box-shadow: 0 0 30px rgb(0 0 0 / 20%);
    padding: 30px;
    background: #F2F5FC;
    max-width: 1250px;
`;

const Input = styled.input `
    padding: 10px 15px;
    font-size: 14px;
`;

const Textarea = styled.textarea `
    padding: 12px 15px;
`;