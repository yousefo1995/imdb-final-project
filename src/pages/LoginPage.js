import React from "react";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { logoUrl } from "../components/NavBar/NavConstants";
import ImdbButton from "../components/Core/ImdbButton/ImdbButton";
import "./style/login.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import ErrorMessage from "../components/LoginComponents/ErrorMessage";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    pasword: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    setErrorMessage(null);
  };

  const { email, password } = loginData;

  const handelLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box padding={2}>
        <img src={logoUrl} alt="logoUrl" width={108}></img>
      </Box>

      <Box
        border="#DDDDDD solid 1px"
        borderRadius={2}
        width="350px"
        height="380px"
        padding={2.5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          paddingBottom={0.5}
          fontSize="28px"
          color="#111111"
          fontWeight="400"
        >
          Sign in
        </Typography>
        <form onSubmit={handelLogin}>
          <Box display="flex" flexDirection="column" marginBottom={2}>
            <label className="login-label">Email</label>
            <input
              name="email"
              value={email}
              type="email"
              onChange={handleChange}
              placeholder=" Email"
              className="login-input"
            ></input>
          </Box>
          <Box display="flex" flexDirection="column" marginBottom={4}>
            <label className="login-label">Password</label>

            <input
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
              placeholder=" Password"
              className="login-input"
            ></input>
          </Box>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <ImdbButton
            fontSize="12px"
            fontWeight="400"
            showborder={true}
            onClick={handelLogin}
          >
            Sign in
          </ImdbButton>
        </form>
        <Stack alignItems="center" marginTop={7}>
          <Typography fontSize="12px" fontWeight="400" marginBottom={1}>
            New to IMDB?
          </Typography>
          <Link to="/signup">
            <ImdbButton
              fontSize="12px"
              fontWeight="400"
              showborder={true}
              bg="#EEEFF2"
              bghover="#DFE2E7"
            >
              Create your IMDb account
            </ImdbButton>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
