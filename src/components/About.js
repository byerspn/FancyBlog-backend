import {
  Card,
  Button,
  Container,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";

const About = () => {

  return (
    <Container>
      <Card className="text-center m-2 shadow">
        <Card.Title className="mt-1 fs-1 text-center">Ventilation System Anonymous</Card.Title>
        <Card.Header>About</Card.Header>
        <Card.Body>
          <Card.Subtitle className="fw-bold">Did you know ...</Card.Subtitle>
          <Card.Text>
            On VSA, you’re never alone. Our whole community is just waiting to
            hear what you have to say. Join now and discover how much you have
            in common with… well, everybody! - React to other people’s
            vents using our special response buttons - Our community
            understands what you’re going through and will provide support or feedback
            24/7 - Make friends and chat - Get things off your chest and have fun.
          </Card.Text>
          <Card.Text>
            Vent after a long day or just enjoy hearing what
            others are going through.
          </Card.Text>
          <Card.Subtitle className="fw-bold">Express yourself.</Card.Subtitle>
          <Card.Text>
            VSA is your canvas. like, comment, find random post. Make your own
            Anonymous post. Just let it all out.
          </Card.Text>
          <Card.Subtitle className="fw-bold">Be yourself.</Card.Subtitle>
          <Card.Text>
            Connect with your people. Join the community of people across the
            website. See something you love? Give it a YAY and start a
            conversation by commenting. Or just lurk, if you’re feeling shy.
            No big deal.
          </Card.Text>
          <Card.Text>
            It’s a whole big world in here.
          </Card.Text>
          <Card.Text>
            Come on in.
          </Card.Text>
          <Card.Header>Creators</Card.Header>
          <ListGroup horizontal className="d-flex justify-content-center m-2">
            <ListGroup.Item>
              Joshua Aguilar <a target="_blank" rel="noreferrer" href="https://github.com/jaaguil2">jaaguil2</a>
            </ListGroup.Item>
            <ListGroup.Item>
              Parker Byers <a target="_blank" rel="noreferrer" href="https://github.com/byerspn">byerspn</a>
            </ListGroup.Item>
            <ListGroup.Item>
              Geraldo Grell <a target="_blank" rel="noreferrer" href="https://github.com/Jikjii">jikjii</a>
            </ListGroup.Item>
            <ListGroup.Item>
                Jo-Ivan Melgarejo <a target="_blank" rel="noreferrer" href="https://github.com/Jo-Ivan">jo-ivan</a>
            </ListGroup.Item>
          </ListGroup>
          <Card.Header>Outside Links</Card.Header>
          <ButtonGroup className="m-2">
            <Button
              variant="primary"
              target="_blank"
              href="https://github.com/byerspn/fancy-blog-frontend">
              VSA Github
            </Button>
            <Button
              variant="primary"
              target="_blank"
              href="https://reactjs.org/">
              React Documentation
            </Button>
            <Button
              variant="primary"
              target="_blank"
              href="https://react-bootstrap.github.io/">
              React Bootstrap Documentation
            </Button>
          </ButtonGroup>
          </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
