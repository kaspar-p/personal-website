import { offBlack } from "./constants";

const startingPoint = 0.5;
const changeAmount = 0.25;

export const button = {
  fontWeight: 400,
  textDecoration: "none",
  fontSize: "2rem",
  letterSpacing: "0.5rem",
  padding: `${startingPoint}rem 4vw`,
  fontFamily: "montserrat-medium",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  color: offBlack,
  "&:hover": {
    textDecoration: "none",
    borderBottom: `2px solid ${offBlack}`,
    paddingTop: `${startingPoint - changeAmount}rem`,
    paddingBottom: `${startingPoint + changeAmount}rem`,
  },
};

export default button;
