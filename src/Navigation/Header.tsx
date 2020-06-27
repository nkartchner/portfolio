import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ProfilePic from "./avatar.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 2,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[11],
    },
    header: {
      color: theme.palette.text.primary,
      gridRow: 1,
      display: "grid",
      gridTemplateRows: "auto auto 300px auto",
      padding: theme.spacing(1),
    },
    name: {
      margin: theme.spacing(1, 0),
      paddingRight: theme.spacing(1),
    },
    jobTitle: {
      margin: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    profilePic: {
      height: 250,
      width: 250,
      margin: theme.spacing(1),
      justifySelf: "center",
      borderRadius: "50%",
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:768px)");
  return (
    <div className={classes.root}>
      <span>{`(min-width:768px) matches: ${matches}`}</span>
      <div className={classes.header}>
        <Typography variant="h4" align="right" className={classes.name}>
          Nathan Kartchner
        </Typography>
        <Typography variant="h6" align="right" className={classes.jobTitle}>
          Full Stack Web Developer
        </Typography>
        <img
          src={ProfilePic}
          alt="Nathan Kartchner profile"
          className={classes.profilePic}
        />
      </div>
    </div>
  );
};

export default Header;
