import { Button, Col, Row } from "react-bootstrap";
import Controls from "./Controls";

interface ViewerProp {
  pdf: string;
}

const Viewer = (prop: ViewerProp) => {
  return (
    <Col className="text-center">
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

export default Viewer;
