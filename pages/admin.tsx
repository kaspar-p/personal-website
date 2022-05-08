import React from "react";
// import Router from "next/router";
import exact from "prop-types-exact";
import { Container, Stack, Button, Typography } from "@mui/material";

import { useSession, signIn, signOut } from "next-auth/react";

const propTypes = {};

function CenterPageTemplate({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: ({ palette }) => palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Stack
          sx={{ minHeight: "100vh" }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack justifyContent="center" spacing={1} alignItems="center">
            {children}
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
}

function AdminPage() {
  const { data: session, status } = useSession();

  console.log(session);
  let children;
  if (status === "loading") {
    children = <Typography variant="h3">Loading...</Typography>;
  } else if (status === "unauthenticated") {
    children = (
      <>
        <Typography variant="h4" color="primary">
          kaspar poland admin page
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => signIn()}
        >
          Sign in
        </Button>
      </>
    );
  } else {
    children = (
      <>
        <Typography variant="h4" color="primary">
          you are signed in
        </Typography>
        <Button variant="outlined" size="large" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }

  return <CenterPageTemplate>{children}</CenterPageTemplate>;
}

AdminPage.propTypes = exact(propTypes);

export default AdminPage;
