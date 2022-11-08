import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Card, Container, Modal, Table } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "hooks";
import { fetchFiles } from "features/files/fileSlice";
import DealForm from "./DealForm";
import { useEffect, useState } from "react";
import Popup from "./Popup";

const DealTable = () => {
  const dispatch = useAppDispatch();

  const { files } = useAppSelector((state) => state.file);
  const [show, setShow] = useState(false);
  const [del, setDel] = useState(false);
  const [selectedID, setSelectedID] = useState(0);
  const handleOpen = (fileID: number) => {
    setSelectedID(fileID);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const showDel = (fileID: number) => {
    setSelectedID(fileID);
    setDel(true);
  };

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <Container>
      <Card className="p-3 m-3">
        <h2>أخر 10 تعاملات مدخلة</h2>
        <Table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col">اسم الملف</th>
              <th scope="col">الجهة</th>
              <th scope="col">التاريخ</th>
              <th scope="col">تعديل / حذف</th>
            </tr>
          </thead>
          <tbody>
            {files?.map((file) => (
              <tr className="table-primary">
                <td>{file.fileName}</td>
                <td>{file.companyName}</td>
                <td>{file.fileDate}</td>
                <td>
                  <FontAwesomeIcon
                    className="clickable"
                    color="orange"
                    icon={faPenToSquare}
                    onClick={() => handleOpen(file.id!)}
                  />
                  <FontAwesomeIcon
                    className="clickable mx-3"
                    color="red"
                    icon={faXmark}
                    onClick={() => {
                      showDel(file.id!);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <DealForm update={true} fileID={selectedID} />
      </Modal>
      <Popup
        body="هل أنت متأكد من حذف هذا الملف"
        variant="delete"
        show={del}
        setShow={setDel}
        fileID={selectedID}
      />
    </Container>
  );
};

export default DealTable;
