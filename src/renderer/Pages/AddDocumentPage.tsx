import { Col, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchCompanies } from "features/company/companySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DealForm from "renderer/Components/DealForm";
import CompanyForm from "renderer/Components/CompanyForm";
import DealTable from "renderer/Components/DealTable";

const AddDocumentPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) navigate("/");
    dispatch(fetchCompanies());
  }, [dispatch, navigate, userInfo]);

  return (
    <div className="arabicAllignment formcard2">
      <Row>
        <Col>
          <DealForm update={false} />
          <CompanyForm />
        </Col>
        <Col>
          <DealTable />
        </Col>
      </Row>
    </div>
  );
};

export default AddDocumentPage;
