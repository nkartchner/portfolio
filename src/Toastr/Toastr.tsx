import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import CheckIcon from "@material-ui/icons/Check";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";
import { Typography } from "@material-ui/core";
import { Toast, ToastrPosition } from "./ToastrContext";

const Icons = {
  warning: <WarningIcon />,
  error: <ErrorIcon />,
  info: <InfoIcon />,
  success: <CheckIcon />,
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toastrRoot: {
      position: "fixed",
      zIndex: 3,
    },
    toastContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr 1fr",
      alignItems: "center",
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(1, 0),
      padding: theme.spacing(1),
    },
    toastrTopRt: {
      top: 12,
      right: 12,
    },
    toastrTopLt: {
      top: 12,
      left: 12,
    },
    toastrBtmRt: {
      bottom: 12,
      right: 12,
    },
    toastrBtmLt: {
      bottom: 12,
      left: 12,
    },
    success: {
      backgroundColor: "#5cb85c",
    },
    warning: {
      backgroundColor: "#f0ad4e",
    },
    info: {
      backgroundColor: "#5bc0de",
    },
    error: {
      backgroundColor: "#d9534f",
    },
    closeBtn: {
      gridColumn: 3,
      cursor: "pointer",
      alignSelf: "flex-start",
      justifySelf: "flex-end",
    },
    title: {
      gridColumn: 2,
    },
    icon: {
      gridColumn: 1,
    },
  })
);

interface Props {
  toasts: Toast[];
  position: ToastrPosition;
  remove: (toastId: string) => void;
}

const Toastr: React.FC<Props> = ({ position, toasts, remove }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.toastrRoot, classes[position])}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={clsx(
            classes.toastContainer,
            classes[position],
            classes[toast.level]
          )}
        >
          <span className={classes.icon}>{Icons[toast.level]}</span>
          <div className={classes.title}>
            <Typography variant="body1">{toast.title}</Typography>
            <Typography variant="body2">{toast.desc}</Typography>
          </div>
          <Typography
            variant="button"
            onClick={() => remove(toast.id!)}
            className={classes.closeBtn}
          >
            x
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Toastr;
