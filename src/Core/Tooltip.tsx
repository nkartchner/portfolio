// const Tooltip: React.FC<Props> = ({ src, alt }) => {
//     const classes = useStyles();
//     const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
//     React.useLayoutEffect(() => {
//         if (!isLoaded) {
//             const image = new Image();
//             image.src = src;
//             image.alt = alt;
//             image.onload = () => {
//                 setIsLoaded(true);
//             };
//         }
//     }, [src, alt, isLoaded]);
//     return (
//         <div
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             className={classes.icon}
//         >
//             {isLoaded ? (
//                 <img src={src} alt={alt} className={classes.iconImg} />
//             ) : (
//                 <CircularProgress color="primary" />
//             )}
//         </div>
//     );
// };

// export default Tooltip;

import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Badge from "@material-ui/core/Badge";
import { TechIcon } from "../About/technologies";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        position: "relative",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        transition: "box-shadow",
        boxShadow: theme.shadows[5],

        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    },
    img: { height: "auto", width: "100%" },
    tooltip: {
        position: "absolute",
        transition:
            "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        transformOrigin: "center top",
        borderRadius: 4,
        fontWeight: 400,
        lineHeight: "1.4em",
        fontSize: "0.625rem",
        padding: "4px 8px",
        zIndex: 200,
        top: -20,
        backgroundColor: theme.palette.action.disabled,
    },
    iconImg: { height: "100%", width: "100%", flex: 1 },
    asterisk: {
        position: "absolute",
        content: "*",
        color: theme.palette.warning.main,
    },
}));

type Props = TechIcon & {};

const Tooltip: React.FC<Props> = ({ src, alt, years, isStrongest }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    React.useLayoutEffect(() => {
        if (!isLoaded) {
            const image = new Image();
            image.src = src;
            image.alt = alt;
            image.onload = () => {
                setIsLoaded(true);
            };
        }
    }, [src, alt, isLoaded]);
    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={classes.icon}
        >
            {isLoaded ? (
                <div className={classes.iconImg}>
                    <Badge
                        badgeContent={years}
                        overlap="circle"
                        color="primary"
                    >
                        <img src={src} alt={alt} className={classes.img} />
                    </Badge>
                    {matches && (
                        <Typography variant="caption">{alt}</Typography>
                    )}
                </div>
            ) : (
                <CircularProgress color="primary" />
            )}
            {!matches && (
                <div
                    className={classes.tooltip}
                    style={{
                        opacity: isHovering ? 1 : 0,
                    }}
                >
                    {alt}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
