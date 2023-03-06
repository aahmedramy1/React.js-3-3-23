import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";

const VideoCard = ({ title, description, image }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="test">{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;

for (let i = 0; i < 5; i++) {
  console.log("hello");
}
