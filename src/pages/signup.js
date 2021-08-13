import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValid = firstName === "" || emailAddress === "" || password === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setEmailAdress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up!</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Adress"
              value={emailAddress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autocomplete="off"
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isValid}>
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
