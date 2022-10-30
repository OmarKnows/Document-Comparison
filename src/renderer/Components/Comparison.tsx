import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Controls from "./Controls";

interface ComparisonProp {
  pdf: string;
}

const Comparison = (prop: ComparisonProp) => {
  return (
    <Col className="text-center">
      <Card className="p-3 my-3">
        <Row>
          <Col className="mb-3">
            <Form.Label>التعامل</Form.Label>
            <Form.Select>
              <option>اختيار</option>
            </Form.Select>
          </Col>
          <Col className="mb-3">
            <Form.Label>السنة</Form.Label>
            <Form.Select>
              <option>اختيار</option>
            </Form.Select>
          </Col>
        </Row>
        <Button className="d-grid gap-2">مقارنة</Button>
      </Card>
      <object
        data={prop.pdf}
        type="application/pdf"
        width="100%"
        height="640px"
      >
        <a href={prop.pdf} />
      </object>
      <Controls />
    </Col>
  );
};

export default Comparison;
