import { Row, Col, Button } from "react-bootstrap";

const Controls = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button variant="info">السابق</Button>
        </Col>
        <Col>
          <p>التعامل</p>
        </Col>
        <Col>
          <Button variant="success">التالي</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Controls;
