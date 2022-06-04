import React from "react";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

import CenterPageTemplate from "../CenterPageTemplate";

interface UnauthenticatedPagePropTypes {}

function UnauthenticatedPage(props: UnauthenticatedPagePropTypes) {
  return (
    <CenterPageTemplate>
      <Typography variant="h3">
        you are not authorized to view this content
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => signIn()}
      >
        Sign in
      </Button>
    </CenterPageTemplate>
  );
}

export default UnauthenticatedPage;
