import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            gridRow: 1,
            gridColumn: 2,
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        menu: {
            gridColumn: 1,
            justifySelf: "flex-start",
        },
        title: {
            gridColumn: 2,
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
    })
);

const TopBar: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton
                size="medium"
                className={classes.menu}
                color="secondary"
            >
                <Menu />
            </IconButton>
            <div className={classes.title}>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/projects"
                >
                    Projects
                </NavLink>
                <NavLink
                    className={classes.btn}
                    activeClassName={classes.selected}
                    to="/contact"
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default TopBar;
