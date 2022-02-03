import React, { ReactNode } from "react";
import { Container, Stack, Typography } from "@mui/material";

interface ProjectPageTemplateProps {
  title: string;
  children: ReactNode;
}

function ProjectPageTemplate(props: ProjectPageTemplateProps) {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: ({ palette }) => palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Stack
          direction="column"
          sx={{ minHeight: "100vh", paddingY: "7.5%", paddingX: 0 }}
          spacing={3}
        >
          <Typography variant="h4" color="primary" sx={{ paddingBottom: 0 }}>
            {props.title}
          </Typography>
          {props.children}
        </Stack>
      </Container>
    </Container>
  );
}

export default ProjectPageTemplate;
