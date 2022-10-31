import { Alert, Container } from "react-bootstrap";

interface MessageProps {
  variant: string;
  children: String;
}

const Message = (prop: MessageProps) => {
  return (
    <Container className="text-center" style={{ width: "55%" }}>
      <Alert variant={prop.variant}>{prop.children}</Alert>
    </Container>
  );
};

export default Message;
