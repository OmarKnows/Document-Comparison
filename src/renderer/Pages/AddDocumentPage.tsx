import { Button, Card, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchCompanies, insertCompany } from "features/company/companySlice";
import { Company } from "features/company/companyModel";
import { fileUpload, addNewFileToDb } from "features/files/fileSlice";
import { useEffect, useState } from "react";
import Message from "renderer/Components/Message";
import axios, { AxiosError } from "axios";

const AddDocumentPage = () => {
  const [newCompany, setNewCompany] = useState<Company>({ name: "" });
  const [date, setDate] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch = useAppDispatch();
  const { comapnies } = useAppSelector((state) => state.company);
  const { isError, errorMessage } = useAppSelector((state) => state.file);

  const submitCompanyForm = async (e: any) => {
    e.preventDefault();

    await dispatch(insertCompany(newCompany));
    console.log(isError);
  };

  const submitNewFile = async (e: any) => {
    e.preventDefault();
    try {
      await dispatch(fileUpload(selectedFile));
      await dispatch(
        addNewFileToDb({
          companyName: company,
          fileName: fileName,
          date: date,
        })
      );
      // console.log(`تم إضافة مكاتبة جديدة لـ ${company}`);
    } catch (error) {
      console.log(error);
    }
  };

  const selectFile = (e: any) => {
    setSelectedFile(e.currentTarget.files[0]);
    setFileName(e.currentTarget.files[0].name);
  };

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="arabicAllignment logincard">
      <Form onSubmit={submitNewFile}>
        <Container>
          <Card className="p-3 m-3">
            <h2>اضافة تعامل</h2>
            <Form.Label>الجهة</Form.Label>
            <Form.Select onChange={(e) => setCompany(e.target.value)}>
              <option />
              {comapnies?.map((company) => (
                <option key={company.name} value={company.name}>
                  {company.name}
                </option>
              ))}
            </Form.Select>
            <Form.Label>السنة</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
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
      {message ? <Message variant="danger">{message}</Message> : <></>}
    </div>
  );
};

export default AddDocumentPage;
