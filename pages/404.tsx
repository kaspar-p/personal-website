import React from "react";
import exact from "prop-types-exact";
import { Stack, Container, Typography } from "@mui/material";
import PageLink from "../components/PageLink";

const propTypes = {};

function Custom404() {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: ({ palette }) => palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{ minHeight: "100vh", textAlign: "center" }}
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography variant="h4" color="primary">
            it looks like this page doesn&apos;t exist.
          </Typography>
          <PageLink to={"/"} variant="h3">
            return to safety
          </PageLink>
        </Stack>
      </Container>
    </Container>
  );
}

Custom404.propTypes = exact(propTypes);

export default Custom404;
