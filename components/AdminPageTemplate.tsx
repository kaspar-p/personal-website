import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { useSession } from "next-auth/react";
import { Stack, Container, Typography, Grid, Card } from "@mui/material";

import LoadingPage from "./pages/LoadingPage";

interface AdminPagePropTypes {
  children: React.ReactChild;
  title?: string;
}

function AdminPageTemplate({ title, children }: AdminPagePropTypes) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingPage />;
  }

  return (
    <Container maxWidth="lg">
      <Stack sx={{ textAlign: "center", marginY: "40px" }} spacing={4}>
        <Typography variant="h3">
          {title ? title : "kaspar poland's admin portal"}
        </Typography>
        {children}
      </Stack>
    </Container>
  );
}

AdminPageTemplate.propTypes = exact({
  title: PropTypes.string,
  children: PropTypes.object,
});

export default AdminPageTemplate;
