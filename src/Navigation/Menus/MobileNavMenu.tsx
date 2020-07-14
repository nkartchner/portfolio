import React from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles, createStyles } from "@material-ui/core";
import Arrow from "@material-ui/icons/ArrowBackIos";
import { NavLink } from "react-router-dom";
import ContactMenu from "../../Contact/ContactMenu";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
    createStyles({
        menu: {
            display: "grid",

            maxWidth: 300,
            zIndex: 10,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 40,
            right: 20,
            gridAutoRows: 50,
        },
        menuItem: {
            backgroundColor: "transparent",
            padding: "13px 16px",
            textDecoration: "none",
            color: theme.palette.text.primary,
            display: "block",
            border: 0,
            margin: 0,
            outline: 0,
            ...theme.typography.body1,
        },
        active: {
            color: theme.palette.info.main,
        },
        nestedBtn: {
            position: "relative",
            display: "flex",
            alignItems: "center",
        },
        nestedMenu: {
            position: "absolute",
            top: 100,
            right: 106,
        },
        open: {
            backgroundColor: theme.palette.action.hover,
        },
        arrow: { fontSize: 15, marginRight: 4 },
        resumeBtn: {
            backgroundColor: theme.palette.success.main,
        },
    })
);
interface Props {
    close: () => void;
    openResume: () => void;
}
const MobileNavMenu: React.FC<Props> = ({ close, openResume }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const handleToggle = React.useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleClose = React.useCallback(
        ({ clientX, clientY }: MouseEvent) => {
            const paper = document.getElementById("mobile-menu");
            const { top, right, bottom, left } = paper!.getBoundingClientRect();
            if (
                clientX > left &&
                clientX < right &&
                clientY > top &&
                clientY < bottom
            ) {
                return false;
            }
            return close();
        },
        [close]
    );
    const handleKeydown = React.useCallback(
        ({ keyCode }: KeyboardEvent) => {
            if (keyCode === 27) {
                if (isOpen) handleToggle();
                else close();
            }
        },
        [isOpen, close, handleToggle]
    );

    React.useEffect(() => {
        if (!isOpen) {
            document.addEventListener("click", handleClose);
            document.addEventListener("keydown", handleKeydown);
            return () => {
                document.removeEventListener("click", handleClose);
                document.removeEventListener("keydown", handleKeydown);
            };
        } else {
            document.addEventListener("keydown", handleKeydown);
            return () => {
                document.removeEventListener("keydown", handleKeydown);
            };
        }
    }, [handleClose, handleKeydown, isOpen]);

    return (
        <Paper id="mobile-menu" className={classes.menu} elevation={8}>
            <NavLink
                activeClassName={classes.active}
                onClick={close}
                className={classes.menuItem}
                to="/portfolio/about"
            >
                About
            </NavLink>
            <NavLink
                activeClassName={classes.active}
                className={classes.menuItem}
                onClick={close}
                to="/portfolio/projects"
            >
                Projects
            </NavLink>
            <button
                className={clsx(classes.menuItem, classes.nestedBtn, {
                    [classes.open]: isOpen,
                })}
                onClick={handleToggle}
            >
                <Arrow className={classes.arrow} /> Contact
            </button>
            {isOpen && (
                <div className={classes.nestedMenu}>
                    <ContactMenu close={handleToggle} />
                </div>
            )}
            <button
                onClick={openResume}
                className={clsx(classes.menuItem, classes.resumeBtn)}
            >
                Resum&eacute;
            </button>
        </Paper>
    );
};

export default MobileNavMenu;
