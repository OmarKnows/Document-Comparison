import { Card, Form, Button } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
}

const LoginPage = () => {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<any>("");
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    navigate("/compare");
  };

  return (
    <div>
      <div className="logincard">
        <Card className="p-3 mt-5">
          <div>
            <img
              className="rounded mx-auto d-block"
              src={logo}
              alt="logo"
            ></img>
          </div>
          <div className="my-4">
            <h1 className="text-center mainTitle">منظومة التسويق</h1>
          </div>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Select
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              >
                <option value={""}>{""}</option>
                {users.map((user) => (
                  <option key={user.username} value={user.username}>
                    {user.username}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="form-group py-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" className="btn btn-primary my-3">
                Login
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
