import React, { useState } from "react";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/userActions";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    props.actions.login(username, password).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={(e) => handleLogin(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

Login.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.loginUser, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(Login);
