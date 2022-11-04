import { Button, Card, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchCompanies, insertCompany } from "features/company/companySlice";
import { Company } from "features/company/companyModel";
import { fileUpload, addNewFileToDb } from "features/files/fileSlice";
import { useEffect, useState, useRef } from "react";
import Popup from "renderer/Components/Popup";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const AddDocumentPage = () => {
  const [newCompany, setNewCompany] = useState<Company>({ name: "" });
  const [date, setDate] = useState<Date>(new Date());
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [filePopUp, setFilePopUp] = useState<boolean>(false);
  const [companyPopUp, setCompanyPopUp] = useState<boolean>(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.user);
  const { companies, isCompanyError, companyMessage } = useAppSelector(
    (state) => state.company
  );
  const { fileMessage, isFileError } = useAppSelector((state) => state.file);

  const submitCompanyForm = async (e: any) => {
    e.preventDefault();

    await dispatch(insertCompany(newCompany));
    setCompanyPopUp(true);
  };

  const submitNewFile = async (e: any) => {
    e.preventDefault();

    await dispatch(fileUpload(selectedFile));
    await dispatch(
      addNewFileToDb({
        companyName: company,
        fileName: fileName,
        date: dayjs(date).format("YYYY-MM-DD"),
      })
    );

    setFilePopUp(true);
  };

  const selectFile = (e: any) => {
    setSelectedFile(e.currentTarget.files[0]);
    setFileName(e.currentTarget.files[0].name);
  };

  useEffect(() => {
    if (!userInfo) navigate("/");
    dispatch(fetchCompanies());
  }, [dispatch, navigate, userInfo]);

  return (
    <div className="arabicAllignment logincard">
      <Form onSubmit={submitNewFile}>
        <Container>
          <Card className="p-3 m-3">
            <h2>اضافة تعامل</h2>
            <Form.Label>الجهة</Form.Label>
            <Form.Select onChange={(e) => setCompany(e.target.value)}>
              <option />
              {companies?.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label>السنة</Form.Label>
            <DatePicker value={date} onChange={setDate} format="y-MM-d" />
            <Form.Label>الملف</Form.Label>
            <Form.Control type="file" onChange={(e) => selectFile(e)} />
            <Button type="submit" className="mt-3">
              حفظ
            </Button>
          </Card>
        </Container>
      </Form>
      <hr></hr>

      <Form onSubmit={submitCompanyForm}>
        <Container>
          <Card className="p-3 m-3">
            <h2>اضافة جهة</h2>
            <Form.Control
              placeholder="الجهة"
              value={newCompany?.name}
              onChange={(e) => setNewCompany({ name: e.target.value })}
            />
            <Button type="submit" className="mt-3">
              حفظ
            </Button>
          </Card>
        </Container>
      </Form>
      <Popup
        show={companyPopUp}
        setShow={setCompanyPopUp}
        body={companyMessage}
        variant={isCompanyError ? "danger" : "success"}
      />
      <Popup
        show={filePopUp}
        setShow={setFilePopUp}
        body={fileMessage}
        variant={isFileError ? "danger" : "success"}
      />
    </div>
  );
};

export default AddDocumentPage;
