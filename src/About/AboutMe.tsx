import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const AboutMeSections = [
  "About me",
  "Skills",
  "Hobbies",
  "Previous job experience",
];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "auto",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
  section: {
    height: 500,
  },
}));
const AboutMe: React.FC = () => {
  const classes = useStyles();
  React.useEffect(() => {
    document.title = "About Nathan";
  });
  return (
    <div className={classes.root}>
      <h1>About me page</h1>
      {AboutMeSections.map((section) => (
        <div key={section} id={section} className={classes.section}>
          {section}
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
