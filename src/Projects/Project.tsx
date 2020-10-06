import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import GitHub from "@material-ui/icons/GitHub";
import Tooltip from "../Core/Tooltip";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OpenInBrowser from "@material-ui/icons/OpenInBrowser";
import { TechIcon } from "../About/technologies";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flex: "1 1 400px",
            maxWidth: 400,
            height: "max-content",
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        media: {
            backgroundSize: "100%",
            transition: "background-image 100ms ease-in-out",
        },
        expand: {
            transform: "rotate(0deg)",
            marginLeft: "auto",
            transition: theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: "rotate(180deg)",
        },
        avatar: {
            backgroundColor: red[500],
        },
        technologies: {
            display: "grid",
            columnGap: "10px  ",
            rowGap: "15px",
            justifyItems: "center",
            gridAutoFlow: "row dense",
            gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
        },
        actions: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        webLink: {
            justifySelf: "start",
        },
        details: {
            justifySelf: "end",
        },
        tech: {
            justifySelf: "center",
        },
        techIcon: {
            height: 35,
            width: 35,
            userSelect: "none",
            padding: theme.spacing(1),
        },
        longDesc: {
            marginTop: theme.spacing(1),
        },
    })
);
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export interface IProps {
    screenshots: string[];
    title: string;
    startDate: Date;
    shortDesc: JSX.Element;
    inProgress: boolean;
    Avatar: TechIcon;
    longDesc?: (className: string) => JSX.Element;
    links: {
        github?: string;
        website?: string;
    };
    technologies?: TechIcon[];
}

const Project: React.FC<IProps> = (props) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState<boolean>(false);
    const [expandedTech, setExpandedTech] = React.useState<boolean>(false);
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    const [rotation, setRotation] = React.useState<number>(0);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExpandTech = () => {
        setExpandedTech(!expandedTech);
    };

    React.useEffect(() => {
        if (isHovering) {
            const timer = setInterval(
                () =>
                    setRotation((i) => {
                        if (i === props.screenshots.length - 1) {
                            return 0;
                        } else {
                            return i + 1;
                        }
                    }),
                1000
            );
            return () => clearInterval(timer);
        }
    }, [props.screenshots, isHovering]);

    return (
        <Card className={classes.root} elevation={8}>
            <CardHeader
                avatar={
                    <img
                        src={props.Avatar.src}
                        alt={props.Avatar.alt}
                        height={35}
                        width={35}
                    />
                }
                title={props.title}
                subheader={`${props.inProgress ? "In progress since " : ""}${
                    MONTHS[props.startDate.getMonth() - 1]
                } ${props.startDate.getFullYear()}`}
            />

            {Boolean(props.screenshots.length) && (
                <CardMedia
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    component="img"
                    className={classes.media}
                    src={props.screenshots[rotation]}
                    title={props.title}
                />
            )}
            <CardContent>{props.shortDesc}</CardContent>
            <CardActions className={classes.actions}>
                {props.links.github && (
                    <IconButton
                        className={classes.webLink}
                        href={props.links.github}
                    >
                        <GitHub />
                    </IconButton>
                )}
                {props.links.website && (
                    <IconButton
                        className={classes.webLink}
                        href={props.links.website}
                    >
                        <OpenInBrowser />
                    </IconButton>
                )}

                {props.longDesc && (
                    <Button
                        className={classes.details}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        Details{" "}
                        <ExpandMoreIcon
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                        />
                    </Button>
                )}
                <Button
                    className={classes.tech}
                    onClick={handleExpandTech}
                    aria-expanded={expandedTech}
                    aria-label="show more"
                >
                    Tech{" "}
                    <ExpandMoreIcon
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expandedTech,
                        })}
                    />
                </Button>
            </CardActions>
            {props.technologies && (
                <Collapse in={expandedTech} timeout="auto" unmountOnExit>
                    <CardContent>
                        <div className={classes.technologies}>
                            {props.technologies.map((t) => (
                                <Tooltip {...t} key={t.alt} />
                            ))}
                        </div>
                    </CardContent>
                </Collapse>
            )}
            {props.longDesc && (
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {props.longDesc(classes.longDesc)}
                    </CardContent>
                </Collapse>
            )}
        </Card>
    );
};
export default Project;
