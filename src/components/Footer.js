import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container 
      fluid
      className="
        fixed-bottom
        text-center 
        p-1 
        bg-dark 
        text-white-50
      ">
      &copy;
      {new Date().getFullYear()} 
      &nbsp;
      | FANCY BLOG INC | 
      All rights reserved
    </Container>
  );
};

export default Footer;
