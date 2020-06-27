import React from "react";
import Menu from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import Resume from "./Nathan_Kartchner_Resume.pdf";
import ContactMenu from "../Contact/ContactMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      gridRow: 1,
      gridColumn: "1 / 3",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    menu: {
      gridColumn: 1,
      marginLeft: theme.spacing(1),
      justifySelf: "flex-start",
    },
    title: {
      gridColumn: 2,
      display: "grid",
      alignItems: "center",
      maxHeight: 36,
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    btn: {
      margin: theme.spacing(0, 1),
      padding: "6px 16px",
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.primary.dark,
      border: 0,
      display: "inline-flex",
      cursor: "pointer",
      outline: 0,
      verticalAlign: "middle",
      alignItems: "center",
      userSelect: "none",
      position: "relative",
      justifyContent: "center",
      WebkitAppearance: "none",
      WebkitTapHighlightColor: "transparent",
      minWidth: 64,
      height: 24,
      transition:
        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      boxShadow: theme.shadows[2],
      borderRadius: theme.shape.borderRadius,
      textDecoration: "none",
    },
    selected: {
      borderBottom: "4px solid " + theme.palette.secondary.light,
      color: theme.palette.primary.contrastText,
    },
    resumeBtn: {
      display: "flex",
      gridColumn: 4,
      width: "fit-content",
      backgroundColor: theme.palette.success.main,
      padding: theme.spacing("6px", 2),
    },
    cloudIcon: {
      marginRight: theme.spacing(1),
    },
    about: {
      gridColumn: 1,
    },
    projects: {
      gridColumn: 2,
    },
    contact: {
      gridColumn: 3,
    },
    contactMenu: {
      display: "grid",
      position: "absolute",
      left: 0,
      top: 35,
      zIndex: 4,
      padding: theme.spacing(1),
      gridAutoColumns: "auto",
    },
    menuOpen: {
      borderBottom: "4px solid " + theme.palette.info.light,
    },
  })
);

const TopBar: React.FC = () => {
  const classes = useStyles();
  const [contactMenu, setContact] = React.useState<boolean>(false);
  const handleClose = () => {
    setContact(false);
  };
  return (
    <div className={classes.root}>
      <IconButton size="medium" className={classes.menu} color="secondary">
        <Menu />
      </IconButton>
      <div className={classes.title}>
        <NavLink
          className={clsx(classes.btn, classes.about)}
          activeClassName={classes.selected}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={clsx(classes.btn, classes.projects)}
          activeClassName={classes.selected}
          to="/projects"
        >
          Projects
        </NavLink>
        <Typography
          variant="body1"
          component="div"
          className={clsx(classes.btn, classes.contact, {
            [classes.menuOpen]: contactMenu,
          })}
          onClick={() => setContact(true)}
        >
          Contact
          {contactMenu && (
            <div className={classes.contactMenu}>
              <ContactMenu close={handleClose} />
            </div>
          )}
        </Typography>
        <a
          download
          href={Resume}
          className={clsx(classes.btn, classes.resumeBtn)}
        >
          <CloudDownloadIcon className={classes.cloudIcon} /> Resum&eacute;
        </a>
      </div>
    </div>
  );
};

export default TopBar;
