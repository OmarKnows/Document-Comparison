import { Card, Form, Button } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Message from "renderer/Components/Message";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchUsers, login } from "features/user/userSlice";

const LoginPage = () => {
  const [name, setName] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { users, usersError, userInfo } = useAppSelector((state) => state.user);

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      login({
        name,
        password,
      })
    );
  };

  useEffect(() => {
    if (userInfo) navigate("/compare");
    dispatch(fetchUsers());
  }, [dispatch, userInfo]);

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
          {usersError.isError ? (
            <Message variant="danger">{usersError.message}</Message>
          ) : (
            <></>
          )}
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Select
                onChange={(e) => {
                  setName(e.target.value);
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
