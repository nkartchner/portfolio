import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    },
    tooltip: {
        position: "absolute",
        transition:
            "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        margin: "14px 0",
        transformOrigin: "center top",
        borderRadius: 4,
        fontWeight: 400,
        lineHeight: "1.4em",
        fontSize: "0.625rem",
        padding: "4px 8px",
        zIndex: 200,
        top: -30,
        backgroundColor: theme.palette.action.disabled,
    },
    iconImg: { height: "100%", width: "100%", flex: 1 },
}));

interface Props {
    src: string;
    alt: string;
}

const Tooltip: React.FC<Props> = ({ src, alt }) => {
    const classes = useStyles();
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={classes.icon}
        >
            <img src={src} alt={alt} className={classes.iconImg} />
            <div
                className={classes.tooltip}
                style={{
                    opacity: isHovering ? 1 : 0,
                }}
            >
                {alt}
            </div>
        </div>
    );
};

export default Tooltip;
