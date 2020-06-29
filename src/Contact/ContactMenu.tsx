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
  const [hasCoppied, setHasCoppied] = React.useState<boolean>(false);
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
// import MenuList from "@material-ui/core/MenuList";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// export function SimpleMenu() {
//   return (
//     <Paper>
//       <MenuList>
//         <MenuItem>
//           <ListItemIcon></ListItemIcon>
//           <EmailIcon />
//           <ListItemText>Profile</ListItemText>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon></ListItemIcon>
//           <GitHubIcon />
//           <ListItemText>My account</ListItemText>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon></ListItemIcon>
//           <LinkedInIcon />
//           <ListItemText>Logout</ListItemText>
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   );
// }
