import React from "react";
import { Button, Typography, Link } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ProfilePic from "./avatar.jpg";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "grid",
            gridColumn: 1,
            gridRow: "1 / 3",
            gridTemplateRows: "max-content auto",
            zIndex: 2,
            background: theme.palette.background.paper,
            boxShadow: theme.shadows[11],
        },
        header: {
            color: theme.palette.text.primary,
            gridRow: 1,
            display: "grid",
            padding: theme.spacing(1),
            borderBottom: "5px solid " + theme.palette.primary.main,
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
        downloadBtn: {
            margin: theme.spacing(1, 0),
        },
        routes: {
            gridRow: 2,
            display: "flex",
            flexDirection: "column",
        },
        btn: {
            margin: theme.spacing(1, 0),
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
            transition:
                "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: theme.shadows[2],
            borderRadius: theme.shape.borderRadius,
            textDecoration: "none",
        },
        arrow: {
            marginRight: theme.spacing(2),
            transition: "transform 100ms ease-in-out",
        },
        selected: {
            borderBottom: "4px solid " + theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
            "& .arrow": {
                transform: "rotate(90deg)",
            },
            "& + .nested": {
                maxHeight: 300,
            },
        },
        nestedMenu: {
            maxHeight: 0,
            WebkitTransition: "max-height 0.2s ease-out",
            MozTransition: "max-height 0.2s ease-out",
            msTransition: "max-height 0.2s ease-out",
            OTransition: "max-height 0.2s ease-out",
            transition: "max-height 0.2s ease-out",
            overflow: "hidden",
        },
        nestedLink: {
            display: "block",
            width: "100%",
            margin: theme.spacing(1, 0),
            textAlign: "right",
            padding: theme.spacing(1),
            color: theme.palette.text.primary,
            textDecoration: "none",
            "&:hover": {
                backgroundColor: theme.palette.action.hover,
            },
        },
    })
);

const Sidenav: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography variant="h4" align="right" className={classes.name}>
                    Nathan Kartchner
                </Typography>
                <Typography
                    variant="h6"
                    align="right"
                    className={classes.jobTitle}
                >
                    Full Stack Web Developer
                </Typography>
                <img
                    src={ProfilePic}
                    alt="Nathan Kartchner profile"
                    className={classes.profilePic}
                />
                <Button
                    className={classes.downloadBtn}
                    color="primary"
                    variant="contained"
                    startIcon={<CloudDownloadIcon />}
                >
                    Download Resume
                </Button>
            </div>
            <div className={classes.routes}>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/about"
                >
                    <span className={clsx("arrow", classes.arrow)}>
                        <ArrowForwardIosIcon />
                    </span>
                    About
                </NavLink>
                <div className={clsx("nested", classes.nestedMenu)}>
                    <Button
                        onClick={() => {
                            console.log("Scroll into view");
                        }}
                        className={classes.nestedLink}
                        color="secondary"
                    >
                        What Drives Me
                    </Button>
                    <Button
                        onClick={() => {
                            console.log("Scroll into view");
                        }}
                        className={classes.nestedLink}
                        color="secondary"
                    >
                        Mission Statement
                    </Button>
                    <Button
                        onClick={() => {
                            console.log("Scroll into view");
                        }}
                        className={classes.nestedLink}
                        color="secondary"
                    >
                        Bio
                    </Button>
                    <Button
                        onClick={() => {
                            console.log("Scroll into view");
                        }}
                        className={classes.nestedLink}
                        color="secondary"
                    >
                        Hobbies
                    </Button>
                    <Button
                        onClick={() => {
                            console.log("Scroll into view");
                        }}
                        className={classes.nestedLink}
                        color="secondary"
                    >
                        Previous job experience
                    </Button>
                </div>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/projects"
                >
                    <span className={clsx("arrow", classes.arrow)}>
                        <ArrowForwardIosIcon />
                    </span>
                    Projects
                </NavLink>
                <div className={clsx("nested", classes.nestedMenu)}>
                    <Link className={classes.nestedLink} href="#">
                        Test
                    </Link>
                    <Link className={classes.nestedLink} href="#">
                        Test1
                    </Link>
                    <Link className={classes.nestedLink} href="#">
                        Test2
                    </Link>
                </div>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/contact"
                >
                    <span className={clsx("arrow", classes.arrow)}>
                        <ArrowForwardIosIcon />
                    </span>
                    Contact
                </NavLink>
                <div className={clsx("nested", classes.nestedMenu)}>
                    <Link className={classes.nestedLink} href="#">
                        Test
                    </Link>
                    <Link className={classes.nestedLink} href="#">
                        Test1
                    </Link>
                    <Link className={classes.nestedLink} href="#">
                        Test2
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidenav;
