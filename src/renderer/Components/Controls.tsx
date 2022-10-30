import { Row, Col, Button } from "react-bootstrap";

const Controls = () => {
  return (
    <div>
      <Row>
        <Col>
          <Button variant="success">التالي</Button>
        </Col>
        <Col>
          <p>التعامل</p>
        </Col>
        <Col>
          <Button variant="danger">السابق</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Controls;
