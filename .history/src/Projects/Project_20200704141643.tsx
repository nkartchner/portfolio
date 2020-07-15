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
import GitHub from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OpenInBrowser from "@material-ui/icons/OpenInBrowser";
import StarsIcon from "@material-ui/icons/Stars";
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
        avatar={<img {...Avatar} height="100%" width="100%" />}
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
      <CardActions disableSpacing>
        {props.links.github && (
          <IconButton href={props.links.github}>
            <GitHub />
          </IconButton>
        )}
        {props.links.website && (
          <IconButton href={props.links.website}>
            <OpenInBrowser />
          </IconButton>
        )}

        {props.longDesc && (
          <Tooltip title="description">
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Technologies">
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expandedTech,
            })}
            onClick={handleExpandTech}
            aria-expanded={expandedTech}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
      {props.technologies && (
        <Collapse in={expandedTech} timeout="auto" unmountOnExit>
          <CardContent></CardContent>
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
