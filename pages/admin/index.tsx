import React from "react";
import exact from "prop-types-exact";
import { Button, Typography } from "@mui/material";
import { useSession, signIn } from "next-auth/react";

import AdminDashboard from "../../components/pages/admin/AdminDashboard";
import LoadingPage from "../../components/pages/LoadingPage";
import CenterPageTemplate from "../../components/CenterPageTemplate";

const propTypes = {};

function AdminPage() {
  const { data: session, status } = useSession();

  console.log(session);
  let page;
  if (status === "loading") {
    return <LoadingPage />;
  } else if (status === "unauthenticated") {
    page = (
      <CenterPageTemplate>
        <Typography variant="h4" color="primary">
          kaspar poland's admin page
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
  } else {
    page = <AdminDashboard />;
  }

  return page;
}

AdminPage.propTypes = exact(propTypes);

export default AdminPage;
