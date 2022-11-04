import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { Row, Container, Card, Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Comparison from "renderer/Components/Comparison";

const ComparisonPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) navigate("/");
  }, [navigate, userInfo]);

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
