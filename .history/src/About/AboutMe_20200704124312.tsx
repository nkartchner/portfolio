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
            and soon after, I realized my passion for software development.
            After my completion at Coding Dojo, I immediately teamed up with
            Haurys's as a consultant to build an enterprise application for the
            automotive industry
            <NavLink style={{ color: "lightblue" }} to="/projects">
              projects
            </NavLink>{" "}
            page. Shortly after I graduating, I joined the Coding Dojo team as a
            Lead Instructor where I taught students as well as contributing to
            the upkeep of the curriculum and collaborating with a small team to
            write a full MERN stack curriculum.
          </Typography>
        </div>
      </Paper>

      <Paper elevation={8} className={classes.technologies}>
        <Typography variant="h4">Technologies</Typography>
        <div className={classes.technologyIcons}>
          {TechnologyIcons.map((icon) => (
            <Tooltip {...icon} key={icon.alt} />
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default AboutMe;
