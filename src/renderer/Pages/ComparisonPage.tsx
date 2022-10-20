import { Form, Row, Col, Card } from "react-bootstrap";

const ComparisonPage = () => {
  return (
    <div>
      <h1 className="text-center my-3">Test</h1>
      <Card className="formcard p-3">
        <Form>
          <Row>
            <Col>
              <Form.Select className="formdd">
                <option>test select</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Select className="formdd">
                <option>test select</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select className="formdd">
                <option>test select</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select className="formdd">
                <option>test select</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select className="formdd">
                <option>test select</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default ComparisonPage;
