import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { NavLink } from "react-router-dom";
import ProfilePic from "./avatar.jpg";
import TechnologyIcons from "./technologies";
import Tooltip from "../Core/Tooltip";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "auto",
    height: "100%",
    padding: theme.spacing(0, 2),
  },
  about: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0),
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "300px auto",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "100%",
      gridTemplateRows: "250px auto",
      rowGap: "20px",
    },
  },

  profilePic: {
    height: 250,
    borderRadius: "50%",
    justifySelf: "center",
    gridColumn: 1,
    [theme.breakpoints.down("xs")]: {
      gridColumn: 1,
      gridRow: 1,
    },
  },

  aboutP: {
    display: "grid",
    gridColumn: 2,
    [theme.breakpoints.down("xs")]: {
      gridRow: 2,
      gridColumn: 1,
    },
    "& > *":{
      marginBottom: theme.spacing(2)
    }
  },
  technologies: {
    display: "grid",
    margin: theme.spacing(3, 0),
    padding: theme.spacing(2),
    gap: "15px",
  },
  techTitle: {
    gridRow: 1,
  },
  technologyIcons: {
    gridRow: 2,
    display: "grid",
    columnGap: "10px  ",
    rowGap: "15px",
    justifyItems: "center",
    gridAutoFlow: "row dense",
    gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
  },
  icon: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    position: "relative",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
const AboutMe: React.FC = () => {
  const classes = useStyles();

  const projects = (
    <NavLink style={{ color: "lightblue" }} to="/projects">
      projects
    </NavLink>
  );

  return (
    <div className={classes.root}>
      <Paper elevation={8} className={classes.about}>
        <img className={classes.profilePic} src={ProfilePic} alt="profile" />
        <div className={classes.aboutP}>
          <Typography variant="body1" component="p">
            I am versatile Full Stack web developer and a powerhouse of value
            added. I was a mechanic for 9 years at Haury's Lake City Collision
            with a passion for both cars, and computers. This passion drew me
            towards becoming a certified tuner for high performance applications
            and soon after, I realized my passion for software development and
            decided to switch careers.
          </Typography>
          <Typography variant="body1" component="p">
            After my completion at Coding Dojo, I immediately teamed up with
            Haurys's as a consultant building an enterprise application for the
            automotive repair industry. I've been able to apply my 9 years of
            knowledge in the industry to create a real-time production workflow
            management application, Repairsage. You can read more about, and
            demo, Repairsage in my {projects} page.
          </Typography>
          <Typography variant="body1" component="p">
            I thrive to learn the how things function together as a unit. My
            attention to detail is second to none, and my actions demonstrate
            that I am principled and operate from a platform of integrity in
            everything I do.
          </Typography>
        </div>
      </Paper>

      <Paper elevation={8} className={classes.technologies}>
        <Typography variant="h4">Technologies</Typography>
        <div className={classes.technologyIcons}>
          {Object.values(TechnologyIcons).map((icon) => (
            <Tooltip {...icon} key={icon.alt} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default AboutMe;
