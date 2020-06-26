import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles/";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    navbar: {
        maxHeight: 35,
        display: "flex",
        flex: "1 1 auto",
        marginTop: theme.spacing(1),
        justifyContent: "center",
    },
    navlink: {
        ...theme.typography.button,
        margin: theme.spacing(0, 1),
        padding: "6px 16px",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.primary.main,
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
        borderRadius: 5,
        ...theme.overrides?.MuiButton,
        textDecoration: "none",
    },
    selected: {
        background: theme.palette.info.main,
    },
}));

const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={clsx(classes.navbar)}>
            <NavLink
                to="/contact"
                className={classes.navlink}
                activeClassName={classes.selected}
            >
                Contact Me
            </NavLink>
            <NavLink
                to="/about"
                className={classes.navlink}
                activeClassName={classes.selected}
            >
                About Me
            </NavLink>
            <NavLink
                to="/projects"
                className={classes.navlink}
                activeClassName={classes.selected}
            >
                Projects
            </NavLink>
        </div>
    );
};

export default Navbar;
