import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";
import oldcabin from "../images/oldcabin.jpg";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <Row>
      <Col md={7}>
        <FormContainer>
          <h1>Sign Up</h1>
          {message && <Message variant="danger">{message}</Message>}
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label style={{ color: "#7b113a" }}>
                Name <i class="fas fa-child" />
              </Form.Label>
              <Form.Control
                type="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label style={{ color: "#7b113a" }}>
                Email Address <i class="fas fa-envelope-open-text" />
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
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

            <Form.Group controlId="confirmPassword">
              <Form.Label style={{ color: "#7b113a" }}>
                Confirm Password <i class="fas fa-unlock-alt" />
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Register
            </Button>
          </Form>

          <Row className="py-3">
            <Col style={{ color: "#7b113a" }}>
              Have an Account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
                Login <i class="fas fa-user" />
              </Link>
            </Col>
          </Row>
        </FormContainer>
      </Col>
      <Col md={5} className="animate__animated animate__slideInRight">
        <img
          src={oldcabin}
          alt="sd"
          height="320em"
          style={{ margin: "2rem 2rem 1rem 0" }}
        />
      </Col>
    </Row>
  );
};

export default RegisterScreen;
