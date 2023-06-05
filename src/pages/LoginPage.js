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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
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

  const handelLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      let errorMes = "An error occurred while logging in.";

      if (error.code === "auth/user-disabled") {
        errorMes = "Your account has been disabled.";
      } else if (error.code === "auth/user-not-found") {
        errorMes = "User not found.";
      } else if (error.code === "auth/wrong-password") {
        errorMes = "Incorrect password.";
      }
      setErrorMessage(errorMes);
    }
  };

  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box padding={2}>
        <img
          src={logoUrl}
          alt="logoUrl"
          width={108}
          className="logo-imdb-loginPage"
          onClick={navToHome}
        ></img>
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
        <form onSubmit={handelLogin} className="login-form">
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
            type="submit"
          >
            Sign in
          </ImdbButton>
        </form>
        <Stack alignItems="center" marginTop={7}>
          <Typography fontSize="12px" fontWeight="400" marginBottom={1}>
            New to IMDB?
          </Typography>
          <Link to="/signup">
            <ImdbButton fontSize="12px" fontWeight="400" showborder={true}>
              Create your IMDb account
            </ImdbButton>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginPage;
