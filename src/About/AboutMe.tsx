import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import ProfilePic from "./avatar.jpg";

const AboutMeSections = [
  {
    id: 1,
    title: <Typography variant="h4">About Me</Typography>,
    text: (
      <>
        <Typography variant="body1" component="p">
          I am Full Stack Web Developer with a broad knowledge of multiple
          languages. The foundation of my education came from my time at Coding
          Dojo where I learned how to create an MVP using 3 separate
          technologies/languages. Most of my furthered knowledge comes from my
          freelance application, Repairsage. You can read more about Repairsage
          in my{" "}
          <NavLink style={{ color: "lightblue" }} to="/projects">
            projects
          </NavLink>{" "}
          page. Shortly after I graduating, I joined the Coding Dojo team as a
          Lead Instructor where I managed the delivery of the curriculum to
          students as well as contributing to the upkeep of the curriculum and
          collaborating with a small team to write a full MERN stack curriculum.
        </Typography>
        <Typography variant="body1" component="p" style={{ marginTop: 16 }}>
          On the more personal front, I enjoy spending my free time with my wife
          and daughter, at the race track, working on cars, and furthering my
          knowledge of programming.
        </Typography>
      </>
    ),
  },
  {
    id: 2,
    title: <Typography variant="h4">Technologies</Typography>,
    text: (
      <ul>
        <li>
          Python
          <ul>
            <li>Django</li>
            <li>Flask</li>
            <li>SqlLite</li>
            <li>Jinja2</li>
          </ul>
        </li>
        <li>
          C#
          <ul>
            <li>DOTNET MVC</li>
            <li>Razor</li>
            <li>EntityFramework Core</li>
            <li>MySql</li>
            <li>SignalR</li>
          </ul>
        </li>
        <li>
          Typescript
          <ul>
            <li>MongoDb</li>
            <li>ExpressJs</li>
            <li>Angular 7 - Current</li>
            <li>NodeJs</li>
          </ul>
        </li>
      </ul>
    ),
  },
];
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "auto",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
  section: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0),
  },
  profilePic: {
    height: 250,
    borderRadius: "50%",
    justifySelf: "center",
    gridColumn: 1,
  },
  technologies: {
    display: "grid",
    padding: theme.spacing(3),
    gridTemplateColumns: "300px auto",
    margin: theme.spacing(3, 0),
    alignItems: "center",
  },
  technologyIcons: {
    gridColumn:2,
    display: "flex",
    flexFlow: "row wrap",
    justifyItems: "space-around"
  }
}));
const AboutMe: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={8} className={classes.technologies}>
        <img className={classes.profilePic} src={ProfilePic} alt="profile" />
      </Paper>
      {AboutMeSections.map((section) => (
        <Paper elevation={8} key={section.id} className={classes.section}>
          {section.title}
          {section.text}
        </Paper>
      ))}
    </div>
  );
};

export default AboutMe;
