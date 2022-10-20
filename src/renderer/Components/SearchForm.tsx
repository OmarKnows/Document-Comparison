import { Card, Row, Form, Col, Button } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Card className="formcard p-3 my-3">
      <Row>
        <Col className="text-center mb-3">
          <Form.Label className="text-center">الجهة</Form.Label>
          <Form.Select className="formdd">
            <option>اختيار</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-3">
          <Form.Label className="text-center">التعامل</Form.Label>
          <Form.Select className="formdd">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className="text-center mb-3">
          <Form.Label className="text-center">السنة</Form.Label>
          <Form.Select className="formdd">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className="text-center mb-3">
          <Form.Label className="text-center">التعامل</Form.Label>
          <Form.Select className="formdd">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className="text-center mb-3">
          <Form.Label className="text-center">السنة</Form.Label>
          <Form.Select className="formdd">
            <option>اختيار</option>
          </Form.Select>
        </Col>
      </Row>
      <Button className="d-grid gap-2">مقارنة</Button>
    </Card>
  );
};

export default SearchForm;
