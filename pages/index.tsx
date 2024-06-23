import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div style={{ flex: "col" }}>
      <h2>kaspar poland, coming soon</h2>
      <h4>
        my favorite project, typesofants:{" "}
        <Link href="https://typesofants.org" passHref style={{ color: "blue" }}>
          https://typesofants.org
        </Link>
      </h4>
      <h4>
        my twitter:{" "}
        <Link
          href="https://twitter.com/kasparfp"
          passHref
          style={{ color: "blue" }}
        >
          https://twitter.com/kasparfp
        </Link>
      </h4>
      <h4>
        my github:{" "}
        <Link
          href="https://github.com/kaspar-p/"
          passHref
          style={{ color: "blue" }}
        >
          https://github.com/kaspar-p
        </Link>
      </h4>
      <h4>
        my linkedin:{" "}
        <Link
          href="https://www.linkedin.com/in/kaspar-p-48b115110"
          passHref
          style={{ color: "blue" }}
        >
          https://www.linkedin.com/in/kaspar-p
        </Link>
      </h4>
    </div>
    // <Container
    //   maxWidth={false}
    //   sx={{
    //     backgroundColor: ({ palette }) => palette.background.default,
    //   }}
    // >
    //   <Container maxWidth="md">
    //     <Stack
    //       sx={{ minHeight: "100vh" }}
    //       justifyContent="center"
    //       alignItems="center"
    //     >
    //       <Stack justifyContent="center" spacing={1} alignItems="center">
    //         <Stack justifyContent="center" alignItems="center" spacing={0}>
    //           <Typography variant="h4" color="primary">
    //             {/* <PentagonIcon fontSize="large" /> */}
    //             kaspar poland
    //           </Typography>
    //           <Stack>
    //             <Typography
    //               color="primary"
    //               variant="h6"
    //               sx={{ paddingX: ({ spacing }) => spacing(5) }}
    //             >
    //               coming soon
    //             </Typography>
    //           </Stack>
    //         </Stack>

    //         {/* Projects section */}
    //         {/* <Stack
    //           alignSelf="flex-start"
    //           alignItems="flex-start"
    //           justifyContent="flex-start"
    //           spacing={2}
    //           sx={{ width: "100%" }}
    //         >
    //           <Typography alignSelf="flex-start" color="primary" variant="h3">
    //             <PentagonIcon />
    //             projects
    //           </Typography>
    //           <Stack spacing={1} sx={{ width: "100%" }}>
    //             <HomeLink to="/double-pendulum">double pendulum</HomeLink>
    //             <HomeLink to="/gamingbot">gamingbot</HomeLink>
    //             <HomeLink to="/rs">reed-solomon codes</HomeLink>
    //           </Stack>
    //         </Stack> */}

    //         {/* Contact me section */}
    //         {/* <Stack
    //           alignSelf="flex-start"
    //           alignItems="flex-start"
    //           justifyContent="flex-start"
    //           spacing={2}
    //           sx={{ width: "100%" }}
    //         >
    //           <Typography alignSelf="flex-start" color="primary" variant="h3">
    //             <PentagonIcon />
    //             contact me
    //           </Typography> */}
    //         <Stack spacing={0}>
    //           {/* <HomeLink to={socials.linkedin}>linkedin</HomeLink> */}
    //           <HomeLink to={socials.github}>{GithubIcon}</HomeLink>
    //           {/* <HomeLink to="mailto:kaspar78@mouco.com">email</HomeLink> */}
    //         </Stack>
    //       </Stack>
    //       {/*  */}
    //       {/* </Stack> */}
    //     </Stack>
    //   </Container>
    // </Container>
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
