import React from "react";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { logoUrl } from "../components/NavBar/NavConstants";
import ImdbButton from "../components/Core/ImdbButton/ImdbButton";
import "./style/login.css";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [loginData, setLoginData] = useState({
    name: "",
    email: "",
    pasword: "",
  });

  //
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    //
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { name, email, password } = loginData;

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
          Create account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" marginBottom={2}>
            <label className="login-label">Your name</label>
            <input
              name="name"
              value={name}
              type="name"
              onChange={handleChange}
              className="login-input"
              placeholder=" First and last name"
            ></input>
          </Box>
          <Box display="flex" flexDirection="column" marginBottom={2}>
            <label className="login-label">Email</label>
            <input
              name="email"
              value={email}
              type="email"
              onChange={handleChange}
              className="login-input"
              placeholder=" Your Email"
            ></input>
          </Box>
          <Box display="flex" flexDirection="column" marginBottom={4}>
            <label className="login-label">Password</label>

            <input
              name="password"
              value={password}
              type="password"
              onChange={handleChange}
              className="login-input"
              placeholder=" at least 8 characters"
            ></input>
          </Box>
          <ImdbButton
            fontSize="12px"
            fontWeight="400"
            showborder={true}
            padding="73px"
            textTransform="none"
          >
            Create your IMDb account
          </ImdbButton>
        </form>
        <Stack flexDirection="row" alignItems="center" marginTop={7}>
          <Typography fontSize="13px" fontWeight="400" marginBottom={1}>
            Already have an account?
          </Typography>
          <Link to="/login">
            <Typography
              marginLeft={1}
              marginBottom={1}
              fontSize="13px"
              color="info.main"
            >
              sign in
            </Typography>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default SignUpPage;
