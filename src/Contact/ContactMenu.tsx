import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles, createStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
    createStyles({
        copyTooltip: {
            position: "absolute",
            display: "inline-block",
            padding: theme.spacing(0.5),
            borderRadius: theme.shape.borderRadius,
            fontSize: "small",
            zIndex: 4,
            width: "max-content",
            bottom: 45,
            backgroundColor: theme.palette.secondary.main,
            transition:
                "all 100ms ease-in-out,visibility 0s,opacity 100ms ease-in-out",
        },
        copied: {
            backgroundColor: theme.palette.success.main,
        },
        menu: {
            display: "grid",
            padding: "8px",
            maxWidth: 100,
            gridTemplateRows: "auto auto",
            gridTemplateColumns: "auto auto",
        },
    })
);

interface Props {
    close: () => void;
}

const ContactMenu: React.FC<Props> = ({ close }) => {
    const classes = useStyles();
    const [hasCopied, setHasCopied] = React.useState<boolean>(false);
    const [isHovering, setIsHovering] = React.useState<boolean>(false);

    const handleClose = React.useCallback(
        ({ clientX, clientY }: MouseEvent) => {
            const paper = document.getElementById("contact-menu");
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

    React.useEffect(() => {
        document.addEventListener("click", handleClose);
        return () => document.removeEventListener("click", handleClose);
    }, [handleClose]);

    return (
        <Paper id="contact-menu" className={classes.menu} elevation={9}>
            <IconButton
                onMouseLeave={() => {
                    setIsHovering(false);
                    setHasCopied(false);
                }}
                onMouseEnter={() => {
                    setIsHovering(true);
                }}
                onClick={() => {
                    if (window.navigator && "clipboard" in window.navigator) {
                        window.navigator.clipboard.writeText(
                            "nathan.kartchner@gmail.com"
                        );
                        setHasCopied(true);
                    }
                }}
            >
                <div
                    className={clsx(classes.copyTooltip, {
                        [classes.copied]: hasCopied,
                    })}
                    style={{
                        opacity: isHovering ? 1 : 0,
                        visibility: isHovering ? "visible" : "hidden",
                    }}
                >
                    {hasCopied ? "Copied!" : "Copy email to clipboard"}
                </div>

                <EmailIcon className="icon" />
            </IconButton>

            <IconButton
                onClick={() => close()}
                target="_blank"
                href="https://github.com/nkartchner"
            >
                <GitHubIcon className="icon" />
            </IconButton>

            <IconButton
                onClick={() => close()}
                target="_blank"
                href="https://www.linkedin.com/in/nathan-kartchner/"
            >
                <LinkedInIcon className="icon" />
            </IconButton>
        </Paper>
    );
};

export default ContactMenu;
