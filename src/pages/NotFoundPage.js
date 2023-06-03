import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Stack
      height="50vH"
      justifyContent="center"
      alignItems="center"
      marginTop={8}
      marginBottom={6}
    >
      <Stack width="50%">
        <Typography>
          The requested URL was not found on our server.{" "}
          <Link to="/">Go to the homepage</Link>
        </Typography>
        <Box
          marginTop={2}
          padding={8}
          borderRadius={2}
          bgcolor="secondary.main"
        >
          <Typography variant="h3" color="error" marginBottom={3}>
            404 Error
          </Typography>
          <Typography variant="h2">
            Oops! The page you're looking for doesn't exist.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default NotFoundPage;
