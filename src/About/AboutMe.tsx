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
    minHeight: 500,
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
          <h4>{section}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            suscipit. Nesciunt, sed culpa qui illo pariatur neque esse. Error
            magni aperiam ex nesciunt corporis tempore harum ullam dolorum
            voluptas obcaecati.
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
