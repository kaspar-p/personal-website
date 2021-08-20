import React from "react";
import exact from "prop-types-exact";
import { makeStyles } from "@material-ui/styles";

const propTypes = {};

const useStyles = makeStyles({
  footer: {
    height: "5rem",
  },
});

function Footer() {
  const styles = useStyles();

  return <div className={styles.footer}></div>;
}

Footer.propTypes = exact(propTypes);

export default Footer;
