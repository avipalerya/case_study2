import { Box } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// import Signin from './Signin';

function Signin(props) {
  const [userState, setuserState] = useState({
    email: "",
    password: "",
  });
  const [emailValid, setemailValid] = useState(true);
  const [emailErr, setemailErr] = useState("");

  const [passwordValid, setpasswordValid] = useState(true);
  const [passwordErr, setpasswordErr] = useState("");
  let { email, password } = userState;
  let history = useNavigate();
  const handleChange = (event) => {
    const userstateCopy = { ...userState };
    userstateCopy[event.target.name] = event.target.value;
    setuserState(userstateCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userState);
    const validEmail = validateEmail(userState.email);
    const validPassword = validatePassword(userState.password);
    const regExEmail = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regExPassword = RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

    if (
      !validEmail ||
      !validPassword ||
      !regExEmail.test(email) ||
      !regExPassword.test(password)
    ) {
      console.log(!validEmail);
      console.log(!validPassword);
      console.log(!regExEmail.test(email));
      console.log(!regExEmail.test(password));
      console.error("not valid");
      // }else if(!regEx.test(useState.email)){
      //   console.log("email must be string");
    } else {
      history("/home");
    }
  };
  const validateEmail = (email) => {
    const regEx =
      /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const valid=email;
    if (email === "") {
      setemailValid(false);
      setemailErr("Please enter valid email");
      return false;
    } else if (!regEx.test(email)) {
      setemailValid(false);
      setemailErr("Email Address must be in valid formate with @ symbol");
      return false;
    } else {
      setemailValid(true);
      setemailErr("");
      return true;
    }
  };
  const validatePassword = (password) => {
    const regEx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
      setpasswordValid(false);
      setpasswordErr("Please enter valid password");
      return false;
    } else if (!regEx.test(password)) {
      setpasswordValid(false);
      setpasswordErr(
        "Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters"
      );
      return false;
    } else {
      setpasswordValid(true);
      setpasswordErr("");
      return true;
    }
  };

  return (
    <div>
      <div
        className="container border mt-3 shadow"
        style={{ backgroundColor: "mintcream" }}
      >
        <form onSubmit={handleSubmit} className="login-form" id="form1">
          {/* <span className="material-icons">lock</span> */}
          <div>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className="form-control"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            {!emailValid ? (
              <span style={{ color: "red", fontSize: "8px" }}>{emailErr}</span>
            ) : null}
          </div>
          <div>
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="text"
              name="password"
              value={password}
              className="form-control"
              onChange={(event) => {
                handleChange(event);
              }}
            />
            {!passwordValid ? (
              <span style={{ color: "red", fontSize: "8px" }}>
                {passwordErr}
              </span>
            ) : null}
          </div>

          <div>
            <input type="submit" className="btn btn-primary" id="button" />
          </div>
        </form>
      </div>

      <Link to={"/signup"}>
        <Box alignItems="center">
          <Button className="mb-3" variant="success">
            Create new account
          </Button>
        </Box>
      </Link>
    </div>
  );
}

export default Signin;
