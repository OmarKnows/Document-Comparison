import dayjs from "dayjs";
import {
  addNewFileToDb,
  fileUpload,
  updateFile,
} from "features/files/fileSlice";
import { useAppSelector, useAppDispatch } from "hooks";
import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import DatePicker from "react-date-picker";
import Popup from "./Popup";

interface Props {
  update: Boolean;
  fileID?: number;
}

const DealForm = ({ update, fileID }: Props) => {
  const [company, setCompany] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [fileName, setFileName] = useState<string>("");
  const [filePopUp, setFilePopUp] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { companies } = useAppSelector((state) => state.company);
  const { fileMessage, isFileError } = useAppSelector((state) => state.file);

  const submitNewFile = async (e: any) => {
    e.preventDefault();

    await dispatch(fileUpload(selectedFile));
    if (update) {
      await dispatch(
        updateFile({
          companyName: company,
          fileDate: dayjs(date).format("YYYY-MM-DD"),
          fileName: fileName,
          id: fileID,
        })
      );
    } else {
      await dispatch(
        addNewFileToDb({
          companyName: company,
          fileDate: dayjs(date).format("YYYY-MM-DD"),
          fileName: fileName,
        })
      );
    }

    setFilePopUp(true);
  };

  const selectFile = (e: any) => {
    setSelectedFile(e.currentTarget.files[0]);
    setFileName(e.currentTarget.files[0].name);
  };

  return (
    <Form onSubmit={submitNewFile}>
      <Container>
        <Card className="p-3 m-3">
          <h2>اضافة تعامل</h2>
          <Form.Label>الجهة</Form.Label>
          <Form.Select onChange={(e) => setCompany(e.target.value)}>
            <option />
            {companies?.map((company) => (
              <option key={company.companyName} value={company.companyName}>
                {company.companyName}
              </option>
            ))}
          </Form.Select>
          <Form.Label>السنة</Form.Label>
          <DatePicker value={date} onChange={setDate} format="y-M-d" />
          <Form.Label>الملف</Form.Label>
          <Form.Control type="file" onChange={(e) => selectFile(e)} />
          <Button type="submit" className="mt-3">
            حفظ
          </Button>
        </Card>
      </Container>
      <Popup
        show={filePopUp}
        setShow={setFilePopUp}
        body={fileMessage}
        variant={isFileError ? "danger" : "success"}
      />
    </Form>
  );
};

export default DealForm;
