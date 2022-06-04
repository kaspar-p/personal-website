import { Container, Stack } from "@mui/material";

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

export default CenterPageTemplate;
