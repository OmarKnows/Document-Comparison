import { Button, Card, Container, Form } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchCompanies, insertCompany } from "features/company/companySlice";
import { Company } from "features/company/companyModel";
import { fileUpload, addNewFileToDb } from "features/files/fileSlice";
import { useEffect, useState, useRef } from "react";
import Message from "renderer/Components/Message";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";

const AddDocumentPage = () => {
  const [newCompany, setNewCompany] = useState<Company>({ name: "" });
  const [date, setDate] = useState<Date>(new Date());
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const dispatch = useAppDispatch();

  const { companies, isCompanyError, companyErrorMessage } = useAppSelector(
    (state) => state.company
  );
  const { fileErrorMessage, isFileError } = useAppSelector(
    (state) => state.file
  );

  const submitCompanyForm = async (e: any) => {
    await dispatch(insertCompany(newCompany));
  };

  const submitNewFile = async (e: any) => {
    try {
      await dispatch(fileUpload(selectedFile));
      await dispatch(
        addNewFileToDb({
          companyName: company,
          fileName: fileName,
          date: dayjs(date).format("YYYY-MM-DD"),
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
      {isCompanyError ? (
        <Message variant="danger">{companyErrorMessage}</Message>
      ) : (
        <></>
      )}
      {isFileError ? (
        <Message variant="danger">{fileErrorMessage}</Message>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddDocumentPage;
