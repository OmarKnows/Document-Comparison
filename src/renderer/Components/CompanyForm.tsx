import { Company } from "features/company/companyModel";
import { insertCompany } from "features/company/companySlice";
import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Popup from "./Popup";

const CompanyForm = () => {
  const [newCompany, setNewCompany] = useState<Company>({ companyName: "" });
  const [companyPopUp, setCompanyPopUp] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { isCompanyError, companyMessage } = useAppSelector(
    (state) => state.company
  );
  const submitCompanyForm = async (e: any) => {
    e.preventDefault();

    await dispatch(insertCompany(newCompany));
    setCompanyPopUp(true);
  };

  return (
    <Form style={{ marginTop: "5.5vh" }} onSubmit={submitCompanyForm}>
      <Container>
        <Card className="p-3 m-3">
          <h2>اضافة جهة</h2>
          <Form.Control
            placeholder="الجهة"
            value={newCompany?.companyName}
            onChange={(e) => setNewCompany({ companyName: e.target.value })}
          />
          <Button type="submit" className="mt-3">
            حفظ
          </Button>
        </Card>
      </Container>
      <Popup
        show={companyPopUp}
        setShow={setCompanyPopUp}
        body={companyMessage}
        variant={isCompanyError ? "danger" : "success"}
      />
    </Form>
  );
};

export default CompanyForm;
