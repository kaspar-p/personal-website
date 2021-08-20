const startingPoint = 0.5;
const changeAmount = 0.25;

export const button = {
  fontWeight: 400,
  color: "black",
  textDecoration: "none",
  fontSize: "2rem",
  letterSpacing: "0.5rem",
  padding: `${startingPoint}rem 4vw`,
  fontFamily: "montserrat-medium",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  "&:hover": {
    textDecoration: "none",
    borderBottom: "2px solid black",
    paddingTop: `${startingPoint - changeAmount}rem`,
    paddingBottom: `${startingPoint + changeAmount}rem`,
  },
};

export default button;
