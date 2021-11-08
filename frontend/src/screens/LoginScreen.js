import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";
import bg from "../images/JG.png";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Row>
      <Col md={7} className="animate__animated animate__backInLeft">
        <FormContainer>
          <h1>Sign In</h1>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label style={{ color: "#7b113a" }}>
                Email Address <i class="fas fa-envelope-open-text" />
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email: john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password: 123456">
              <Form.Label style={{ color: "#7b113a" }}>
                Password <i class="fas fa-unlock-alt" />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>

          <Row className="py-3">
            <Col style={{ color: "#7b113a" }}>
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
              >
                Register <i class="fas fa-user" />
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Col>
      <Col md={5} className="animate__animated animate__slideInRight">
        <img
          src={bg}
          alt="sd"
          height="320em"
          style={{ margin: "2rem 2rem 1rem 0" }}
        />
      </Col>
    </Row>
  );
};

export default LoginScreen;
