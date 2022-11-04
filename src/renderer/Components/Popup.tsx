import { Button, Modal } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";

interface Props {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  variant: string;
  body: string;
}

const Popup = (props: Props) => {
  const handleClose = () => {
    props.setShow(false);
    if (props.variant === "success") window.location.reload();
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton={false}>
          <Modal.Title>
            {props.variant === "danger" ? " حدث خطأ" : " تمت الإضافة بنجاح"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant={props.variant} onClick={handleClose}>
            غلق
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Popup;
