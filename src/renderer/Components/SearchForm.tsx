import { Card, Row, Form, Col, Button } from "react-bootstrap";

const SearchForm = () => {
  return (
    <Card className="formcard p-3 my-3 arabicAllignment">
      <Row>
        <Col className=" mb-3">
          <Form.Label>الجهة</Form.Label>
          <Form.Select className="topPadding">
            <option>اختيار</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col className=" mb-3">
          <Form.Label className="">التعامل</Form.Label>
          <Form.Select className="topPadding">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className=" mb-3">
          <Form.Label className="">السنة</Form.Label>
          <Form.Select className="topPadding">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className=" mb-3">
          <Form.Label className="">التعامل</Form.Label>
          <Form.Select className="topPadding">
            <option>اختيار</option>
          </Form.Select>
        </Col>
        <Col className=" mb-3">
          <Form.Label className="">السنة</Form.Label>
          <Form.Select className="topPadding">
            <option>اختيار</option>
          </Form.Select>
        </Col>
      </Row>
      <Button className="d-grid gap-2">مقارنة</Button>
    </Card>
  );
};

export default SearchForm;
