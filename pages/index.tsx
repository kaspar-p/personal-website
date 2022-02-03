import React from "react";
import type { NextPage } from "next";
import Stack from "@mui/material/Stack";
import { Typography, Container } from "@mui/material";

import HomeLink from "../components/HomeLink";

const socials = {
  github: "https://www.github.com/kaspar-p",
  linkedin: "https://www.linkedin.com/in/kaspar-p-48b115110",
};

const Home: NextPage = () => {
  const GithubIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="#545775"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

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
            <Stack justifyContent="center" alignItems="center" spacing={0}>
              <Typography variant="h4" color="primary">
                {/* <PentagonIcon fontSize="large" /> */}
                kaspar poland
              </Typography>
              <Stack>
                <Typography
                  color="primary"
                  variant="h6"
                  sx={{ paddingX: ({ spacing }) => spacing(5) }}
                >
                  coming soon
                </Typography>
              </Stack>
            </Stack>

            {/* Projects section */}
            {/* <Stack
              alignSelf="flex-start"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Typography alignSelf="flex-start" color="primary" variant="h3">
                <PentagonIcon />
                projects
              </Typography>
              <Stack spacing={1} sx={{ width: "100%" }}>
                <HomeLink to="/double-pendulum">double pendulum</HomeLink>
                <HomeLink to="/gamingbot">gamingbot</HomeLink>
                <HomeLink to="/rs">reed-solomon codes</HomeLink>
              </Stack>
            </Stack> */}

            {/* Contact me section */}
            {/* <Stack
              alignSelf="flex-start"
              alignItems="flex-start"
              justifyContent="flex-start"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Typography alignSelf="flex-start" color="primary" variant="h3">
                <PentagonIcon />
                contact me
              </Typography> */}
            <Stack spacing={0}>
              {/* <HomeLink to={socials.linkedin}>linkedin</HomeLink> */}
              <HomeLink to={socials.github}>{GithubIcon}</HomeLink>
              {/* <HomeLink to="mailto:kaspar78@mouco.com">email</HomeLink> */}
            </Stack>
          </Stack>
          {/*  */}
          {/* </Stack> */}
        </Stack>
      </Container>
    </Container>
  );
};

export default Home;

// return (
//   <Grid
//     container
//     justifyContent="center"
//     alignItems="center"
//     className={clsx(styles.homeContainer)}
//   >
//     <Grid
//       item
//       container
//       direction="column"
//       justifyContent="center"
//       alignItems="center"
//       xs={6}
//     >
//       <h1 className={clsx(styles.homeTitle, "montserrat-light")}>
//         kaspar poland
//       </h1>

//       <h3>contact me</h3>
//       <Grid
//         item
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//       >
//         <p>GitHub</p>
//         <p>LinkedIn</p>
//       </Grid>
//     </Grid>
//   </Grid>
// );

// return (
//   <Grid container className={styles.homeContainer} justifyContent="flex-end">
//     <Grid
//       container
//       direction="column"
//       justifyContent="flex-end"
//       alignItems="flex-start"
//     >
//       <Grid
//         item
//         container
//         direction="row"
//         justifyContent="flex-start"
//         alignItems="center"
//         className={styles.titleRow}
//       >
//         <h1 className={clsx(styles.homeTitle, "montserrat-light")}>
//           kaspar poland
//         </h1>
//         <HomeAnimation />
//       </Grid>
//       <Grid
//         item
//         container
//         direction="column"
//         justifyContent="center"
//         alignItems="flex-start"
//         className="home-options-wrapper"
//       >
//         <Link
//           className={clsx(styles.button, styles.homeOption)}
//           href="/projects"
//         >
//           my creations
//         </Link>
//         <Link
//           className={clsx(styles.button, styles.homeOption)}
//           href="/updates"
//         >
//           recent updates
//         </Link>
//         <Link
//           className={clsx(styles.button, styles.homeOption)}
//           href="/contact-me"
//         >
//           contact me
//         </Link>
//       </Grid>
//     </Grid>
//   </Grid>
// );
// };
