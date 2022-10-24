import { Row, Container, Card, Form, Col } from "react-bootstrap";
import Comparison from "renderer/Components/Comparison";

const ComparisonPage = () => {
  return (
    <div>
      <Card className="formcard p-3 my-3 text-center">
        <Row>
          <Col>
            <Form.Label>الجهة</Form.Label>
            <Form.Select>
              <option>اختيار</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>
      <Container>
        <Row>
          <Comparison pdf="http://africau.edu/images/default/sample.pdf" />
          <Comparison pdf="http://africau.edu/images/default/sample.pdf" />
        </Row>
      </Container>
    </div>
  );
};

export default ComparisonPage;
