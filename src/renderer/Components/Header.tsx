import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "hooks";
import {
  faArrowRightFromBracket,
  faFileCirclePlus,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "features/user/userSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    console.log(userInfo);
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Row>
            <Col onClick={() => navigate("/add")}>
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="green"
                    icon={faFileCirclePlus}
                  />
                </span>
              </Row>
              <Row>
                <h6>إضافة</h6>
              </Row>
            </Col>
            <Col onClick={() => navigate("/compare")}>
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="282c34"
                    icon={faFile}
                  />
                </span>
              </Row>
              <Row>
                <h6>مقارنة</h6>
              </Row>
            </Col>
          </Row>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <Row>
                <Col style={{ whiteSpace: "nowrap" }}>
                  <h5 style={{ textAlign: "right", marginTop: "10px" }}>
                    {userInfo}
                  </h5>
                </Col>
                <Col
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  <Row>
                    <span className="text-center">
                      <FontAwesomeIcon
                        className="clickable"
                        color="red"
                        icon={faArrowRightFromBracket}
                      />
                    </span>
                  </Row>
                  <Row>
                    <h6>خروج</h6>
                  </Row>
                </Col>
              </Row>
            </ul>
            <div className="d-flex"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
