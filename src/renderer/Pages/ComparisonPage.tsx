import { Row, Container } from "react-bootstrap";
import SearchForm from "renderer/Components/SearchForm";
import Viewer from "renderer/Components/Viewer";

const ComparisonPage = () => {
  return (
    <div>
      <SearchForm />
      <Container>
        <Row>
          <Viewer pdf="http://africau.edu/images/default/sample.pdf" />
          <Viewer pdf="http://africau.edu/images/default/sample.pdf" />
        </Row>
      </Container>
    </div>
  );
};

export default ComparisonPage;
