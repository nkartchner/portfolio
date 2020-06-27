import React from "react";
import IconButton from "@material-ui/core/IconButton";
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
      bottom: 55,
      backgroundColor: theme.palette.secondary.main,
      transition: "visibility 0s, opacity 100ms ease-in-out",
    },
    copied: {
      backgroundColor: theme.palette.success.main,
    },
  })
);

const Contact = () => {
  const classes = useStyles();
  const [hasCoppied, setHasCoppied] = React.useState<boolean>(false);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.title = "Contact Nathan";
  });

  return (
    <div style={{ padding: "0 16px" }}>
      <h1>Contact me</h1>

      <p>
        <IconButton
          onMouseLeave={() => {
            setIsHovering(false);
            setHasCoppied(false);
          }}
          onMouseEnter={() => {
            setIsHovering(true);
          }}
          onClick={() => {
            setHasCoppied(true);
            window.navigator.clipboard.writeText("nathan.kartchner@gmail.com");
          }}
        >
          <div
            className={clsx(classes.copyTooltip, {
              [classes.copied]: hasCoppied,
            })}
            style={{
              opacity: isHovering ? 1 : 0,
              visibility: isHovering ? "visible" : "hidden",
            }}
          >
            {hasCoppied ? "Copied!" : "Copy email to clipboard"}
          </div>

          <EmailIcon />
        </IconButton>

        <IconButton href="https://github.com/nkartchner">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/nathan-kartchner/">
          <LinkedInIcon />
        </IconButton>
      </p>
    </div>
  );
};

export default Contact;
