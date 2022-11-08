import { Button, Form, Modal } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "hooks";
import { deleteFile } from "features/files/fileSlice";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  fileID?: number | undefined;
  variant: string;
  body: string;
}

const Popup = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    props.setShow(false);
    if (props.variant === "success") window.location.reload();
  };

  const delFile = (fileID: number) => {
    dispatch(deleteFile(fileID));
    // window.location.reload();
  };

  return (
    <Form>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>
            {props.variant === "delete"
              ? "حذف"
              : "danger"
              ? " حدث خطأ"
              : " تمت الإضافة بنجاح"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          {props.variant === "delete" ? (
            <div>
              <Button variant="success" onClick={() => delFile(props.fileID!)}>
                نعم
              </Button>
              <Button className="mx-3" variant="danger" onClick={handleClose}>
                لا
              </Button>
            </div>
          ) : (
            <Button variant={props.variant} onClick={handleClose}>
              غلق
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Form>
  );
};

export default Popup;
