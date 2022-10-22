import { Button, Card, Container, Form } from "react-bootstrap";

const AddDocumentPage = () => {
  return (
    <div className="arabicAllignment logincard">
      <Form>
        <Container>
          <Card className="p-3 m-3">
            <h2>اضافة تعامل</h2>
            <Form.Label>الجهة</Form.Label>
            <Form.Select>
              <option>اختيار</option>
            </Form.Select>
            <Form.Label>السنة</Form.Label>
            <Form.Control type="number" />
            <Form.Label>الملف</Form.Label>
            <Form.Control type="file" />
            <Button className="mt-3">حفظ</Button>
          </Card>
        </Container>
      </Form>

      <hr></hr>

      <Form>
        <Container>
          <Card className="p-3 m-3">
            <h2>اضافة جهة</h2>
            <Form.Control placeholder="الجهة" />
            <Button className="mt-3">حفظ</Button>
          </Card>
        </Container>
      </Form>
    </div>
  );
};

export default AddDocumentPage;
