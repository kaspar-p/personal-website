import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Stack, Container, Paper, Typography, Grid, Card } from "@mui/material";

import LoadingPage from "../LoadingPage";
import AdminPageTemplate from "../../AdminPageTemplate";

interface ProjectCardPropTypes {
  pageData: {
    href: string;
    label: string;
  };
}

function ProjectCard({ pageData }: ProjectCardPropTypes) {
  const [raised, setRaised] = useState(false);

  return (
    <a href={pageData.href}>
      <Card
        elevation={raised ? 15 : 2}
        onMouseOver={() => setRaised(!raised)}
        onMouseOut={() => setRaised(!raised)}
        sx={{
          width: "300px",
          backgroundColor: ({ palette }) => palette.background.default,
          border: ({ palette }) => `3px solid ${palette.primary.main}`,
          color: ({ palette }) => palette.primary.main,
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{pageData.label}</Typography>
      </Card>
    </a>
  );
}

function AdminDashboard() {
  const { data: session, status } = useSession();

  console.log(session);
  if (status === "loading") {
    return <LoadingPage />;
  }

  const projectPages = [
    {
      href: "/admin/ants",
      label: "typesofants.org",
    },
    {
      href: "/admin/6krill",
      label: "6krill.com",
    },
  ];

  return (
    <AdminPageTemplate>
      <Grid container spacing={5}>
        {projectPages.map((pageData) => (
          <Grid item>
            <ProjectCard pageData={pageData} />
          </Grid>
        ))}
      </Grid>
    </AdminPageTemplate>
  );
}

export default AdminDashboard;
