import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import {
  Button,
  FloatingLabel,
  Form,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

//Working on rating button

/*
const nay = require('/Users/Geraldo/Desktop/Coding-project/fancy-blog-frontend/src/components/images/its-a-nay-from-me.jpeg')
const yay = require('/Users/Geraldo/Desktop/Coding-project/fancy-blog-frontend/src/components/images/yay-59cd3c.jpeg')
const shirts = { nay, yay }

const Pics = () => {
    const [selected, setSelected] = useState(shirts.nay)

}

*/

const About = () => {
  return (
    <div>
      <body>
        <Card className="text-center">
          <h1 className="mt-1 text-center">Ventilation System Anonymous</h1>
          <Card.Header>About</Card.Header>
          <Card.Body>
            <Card.Title>Did you know ...</Card.Title>

    

            <Card.Text>
              On Vent, you’re never alone. Our whole community is just waiting
              to hear what you have to say. Join now and discover how much you
              have in common with… well, everybody! - Express your true self
              with our broad range of emotions and colors! - React to other
              people’s vents using our special response buttons - Our community
              understands what you’re going through and will provide support
              24/7 - Make friends and chat privately in real-time without
              sharing personal contact information - Join Groups to connect with
              other people that share similar interests and experiences What are
              you waiting for? Express how you really feel and get the support
              you deserve.
              <br />
              Working together to keep the hays and nays alive and accessible,
              so people worldwide can have quick access to a sysytem that allows
              people to just let it all out.
              <br />
              Read the{" "}
              <a href="https://www.mozilla.org/en-US/about/manifesto/">
                white paper
              </a>{" "}
              to learn even more about the values and principles of venting
              after a long day or just towards the pursuit of hearing what
              others are going through.
            </Card.Text>

            <Card.Header>Creators</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Joshua Aguiar jaaguil2</ListGroup.Item>
              <ListGroup.Item>Parker Byers byerspn</ListGroup.Item>
              <ListGroup.Item>Geraldo Grell jikjii</ListGroup.Item>
              <ListGroup.Item>Jo-Ivan Melgarejo jo-ivan</ListGroup.Item>
            </ListGroup>
            <hr />

            <Button
              variant="primary"
              href="https://github.com/byerspn/fancy-blog-frontend"
            >
              Github
            </Button>

            <Button variant="primary" href="https://react-bootstrap.github.io/">
              Documentation
            </Button>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
};

export default About;
