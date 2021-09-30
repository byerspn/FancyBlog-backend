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
import { alignPropType } from "react-bootstrap/esm/types";

const About = () => {
  return (
    <div>
      <body>
        <Card className="text-center">
          <h1 className="mt-1 text-center">Ventilation System Anonymous</h1>
          <Card.Header>About</Card.Header>
          <Card.Body>
            <Card.Title>Did you know ...</Card.Title>
            <br />
            <Card.Text>
              On VSA, you’re never alone. Our whole community is just waiting to
              hear what you have to say. Join now and discover how much you have
              in common with… well, everybody! - React to other people’s
              vents using our special response buttons - Our community
              understands what you’re going through and will provide support or feedback
              24/7 - Make friends and chat - Get things off your chest and have fun.
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
              <br />
              <br />
              <br />
              <Card.Title>Express yourself.</Card.Title>
              VSA is your canvas. like, comment, find random post. Make your own
              Anonymous post. Just let it all out.
              <br />
              <br />
              <br />
              <Card.Title>Be yourself.</Card.Title>
              Connect with your people. Join the community of people across the
              website. See something you love? Give it a YAY and start a
              conversation by commenting. Or just lurk, if you’re feeling shy.
              No big deal.
              <br />
              <br />
              It’s a whole big world in here.
              <br />
              <br />
              Come on in.
              <br />
              <br />
              <br />
            </Card.Text>

            <Card.Header>Creators</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Joshua Aguiar <a href="https://github.com/jaaguil2">jaaguil2</a>
              </ListGroup.Item>
              <ListGroup.Item>
                Parker Byers <a href="https://github.com/byerspn">byerspn</a>
              </ListGroup.Item>
              <ListGroup.Item>
                Geraldo Grell <a href="https://github.com/Jikjii">jikjii</a>
              </ListGroup.Item>
              <ListGroup.Item>
                Jo-Ivan Melgarejo{" "}
                <a href="https://github.com/Jo-Ivan">jo-ivan</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="primary"
                  href="https://github.com/byerspn/fancy-blog-frontend"
                >
                  Github
                </Button>

                <Button
                  variant="primary"
                  href="https://react-bootstrap.github.io/"
                >
                  Documentation
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
};

export default About;
