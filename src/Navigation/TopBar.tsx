import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { makeStyles, Theme, createStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ContactMenu from "../Contact/ContactMenu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileNavMenu from "./Menus/MobileNavMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            gridRow: 1,
            gridColumn: "1 / 3",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            gridTemplateColumns: "4fr 1fr",
        },

        navMenu: {
            gridColumn: 2,
            display: "grid",
            gridRow: 1,
            alignItems: "center",
            maxHeight: 36,
            gridTemplateColumns: "repeat(4, max-content)",
            "&.mobile": {
                gridTemplateColumns: "auto",
                maxHeight: "100%",
                position: "relative",
            },
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
            width: "fit-content",
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
            height: "auto",
            fontSize: theme.typography.fontSize,
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
            zIndex: 12,
            padding: theme.spacing(1),
            gridAutoColumns: "auto",
        },
        menuOpen: {
            borderBottom: "4px solid " + theme.palette.info.light,
        },
        name: {
            marginLeft: theme.spacing(1),
            gridRow: 1,
            gridColumn: 1,
        }
    })
);

const TopBar: React.FC = () => {
    const history = useHistory();
    const matches = useMediaQuery("(min-width:764px)");
    const classes = useStyles();
    
    const [contactMenu, setContact] = React.useState<boolean>(false);
    const [mobileMenu, setMobileMenuIsOpen] = React.useState<boolean>(false);

    const handleClose = () => {
        setMobileMenuIsOpen(false);
        setContact(false);
    };

    const handleOpenMobileMenu = () => {
        setMobileMenuIsOpen(true);
    };

    const handleOpenResume = () => {
        history.push("/portfolio/resume");
    };

    const mobileView = (
        <div className={clsx(classes.navMenu, "mobile")}>
            <IconButton onClick={handleOpenMobileMenu}>
                <MenuIcon />
            </IconButton>
            {mobileMenu && (
                <MobileNavMenu
                    close={handleClose}
                    openResume={handleOpenResume}
                />
            )}
        </div>
    );

    const desktopView = (
        <div className={classes.navMenu}>
            <NavLink
                className={clsx(classes.btn, classes.about)}
                activeClassName={classes.selected}
                to="/portfolio/about"
            >
                About
            </NavLink>
            <NavLink
                className={clsx(classes.btn, classes.projects)}
                activeClassName={classes.selected}
                to="/portfolio/projects"
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
            <button
                onClick={handleOpenResume}
                className={clsx(classes.btn, classes.resumeBtn)}
            >
                <CloudDownloadIcon className={classes.cloudIcon} />{" "}
                Resum&eacute;
            </button>
        </div>
    );

    return (
        <div className={classes.root}>
            <div className={classes.name}>
                <Typography variant="button">Nathan Kartchner</Typography>
                <Typography variant="body2">
                    Full Stack Web Developer
                </Typography>
            </div>
            {matches ? desktopView : mobileView}
        </div>
    );
};

export default TopBar;
