import { Card, Form, Button } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "renderer/Components/Message";
import axios from "axios";

interface User {
  name: string;
}

const LoginPage = () => {
  const [name, setname] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [users, setUsers] = useState<User[]>([]);
  const [loginError, setloginError] = useState<String>("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      await axios.post("/api/v1/user/login", {
        name,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(name));
      navigate("/compare");
    } catch (error) {
      if (axios.isAxiosError(error))
        setloginError(error.response?.data.message);
    }
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    login();
  };

  useEffect(() => {
    if (localStorage.getItem("userInfo")) navigate("/compare");
    const fetchUsers = async () => {
      const { data } = await axios.get("/api/v1/user");
      setUsers(data);
    };

    fetchUsers();
  }, [users]);

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
          {loginError ? (
            <Message variant="danger">{loginError}</Message>
          ) : (
            <></>
          )}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Select
                onChange={(e) => {
                  setname(e.target.value);
                }}
              >
                <option value={""}>{""}</option>
                {users.map((user) => (
                  <option key={user.name} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="form-group py-3">
              <Form.Control
                type="password"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button type="submit" className="btn btn-primary my-3">
                دخول
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
