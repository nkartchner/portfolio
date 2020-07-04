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
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OpenInBrowser from "@material-ui/icons/OpenInBrowser";
import { TechIcon } from "../About/technologies";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 345,
      height: "max-content",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
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
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-around",
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
  longDesc?: JSX.Element;
  links: {
    github?: string;
    website?: string;
  };
  technologies?: TechIcon[];
}

const Project: React.FC<IProps> = ({ Avatar, ...props }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [expandedTech, setExpandedTech] = React.useState<boolean>(false);
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandTech = () => {
    setExpandedTech(!expandedTech);
  };
  const [rotation, setRotation] = React.useState<number>(0);

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
          <img src={Avatar.src} alt={Avatar.alt} height={35} width={35} />
        }
        title={props.title}
        subheader={`${props.inProgress ? "In progress since " : ""}${
          MONTHS[props.startDate.getMonth()]
        } ${props.startDate.getFullYear()}`}
      />

      <CardMedia
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={classes.media}
        image={props.screenshots[rotation]}
        title={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.shortDesc}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        {props.links.github && (
          <IconButton className={classes.webLink} href={props.links.github}>
            <GitHub />
          </IconButton>
        )}
        {props.links.website && (
          <IconButton className={classes.webLink} href={props.links.website}>
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
                <Tooltip title={t.alt}>
                  <img className={classes.techIcon} src={t.src} alt={t.alt} />
                </Tooltip>
              ))}
            </div>
          </CardContent>
        </Collapse>
      )}
      {props.longDesc && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{props.longDesc}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};
export default Project;
