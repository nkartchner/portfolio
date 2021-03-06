import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as thumbs from "./screenshots";
import Project, { IProps } from "./Project";
import TechIcons, { TechIcon } from "../About/technologies";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "auto",
    },
    container: {
      flexGrow: 1,
      display: "flex",
      flexFlow: "row wrap",
      "& > *": {
        marginRight: theme.spacing(3),
      },
    },
    title: {
      margin: theme.spacing(1),
    },
    project: {
      maxWidth: 345,
      height: "max-content",
    },
    scnshot: {
      height: 140,
    },
  })
);

interface Project {
  uri: string;
  screenshot: string;
  description: string;
  technologies: string[];
}
const MyProjects: IProps[] = [
  {
    title: "Repairsage (WIP)",
    shortDesc: `Real-time Kanban based production workflow/management application for the automotive repair industry.`,

    longDesc: `
        We currently have an instance of Repairsage launched that we use as a demo.
        Repairsage 
        SocketIO is used to accomplish real-time updates for every board
        while using rooms to keep each board separate. One of the most
        important features of Repairsage is the ability to assign a
        technician to a column and an efficiency rating that will
        visually show, based on a 40 hour their column the appropriate
        color. work week, the technicians workload by changing the
        numbers in`,
    inProgress: true,
    highlight: true,
    startDate: new Date(Date.parse("02/01/2019")),
    technologies: [
      TechIcons.Angular10,
      TechIcons.Ngrx,
      TechIcons.Express,
      TechIcons.Mongo,
      TechIcons.Scss,
      TechIcons.SocketIO,
      TechIcons.Typescript,
    ],
    links: {
      website: "https://314solutions.info",
    },
    screenshots: thumbs.rprsageThumbs,
  },
  {
    title: "Last Oasis Clan Manager (WIP)",
    shortDesc: `Clan manager application for Last Oasis`,
    longDesc: (
      <Typography variant="body1" component="p">
        `I wanted to build a project using C# + React so I chose to do a Clan
        manager application for a recently released game that I really enjoyed,
        Last Oasis. It quickly grew into something more than just a clan manager
        as wanted add a feature that recreated the in-game tech tree. I decided
        to use HTML5 canvas and add tooltips.`
      </Typography>
    ),
    startDate: new Date(Date.parse("04/05/2020")),
    technologies: [],
    highlight: false,
    inProgress: true,
    links: {
      github: "https://github.com/nkartchner/LastOasis_ClanManager",
    },
    screenshots: thumbs.clanManagerThumbs,
  },
  {
    title: "Car Dashboard",
    shortDesc: `A simple application that I made with a group of students to show how to do a many to many relationship with C# MVC`,
    startDate: new Date(Date.parse("04/05/2020")),
    technologies: [],
    highlight: false,
    inProgress: false,
    links: {
      github: "https://github.com/nkartchner/CarsDashboard",
    },
    screenshots: [],
  },
  {
    title: "React Chat App",
    shortDesc: `An application that I made while learning how to integrate SocketIO with React.`,
    startDate: new Date(Date.parse("04/05/2020")),
    technologies: [],
    highlight: false,
    inProgress: false,
    links: {
      github: "https://github.com/nkartchner/ReactChat",
    },
    screenshots: [],
  },
  {
    title: "Message Board",
    shortDesc: `Simple Message Board`,
    longDesc: `One of my very first applications I made as I went through the Javascript stack`,
    inProgress: false,
    highlight: false,
    startDate: new Date(Date.parse("01/01/2020")),
    technologies: [],
    links: {
      github: "https://github.com/nkartchner/MessageBoard",
    },
    screenshots: thumbs.messageBoardThumbs,
  },
];
const Projects: React.FC = () => {
  const classes = useStyles();

  React.useEffect(() => {
    document.title = "Nathan's Projects";
  });

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Projects
      </Typography>
      <div className={classes.container}>
        {MyProjects.map((p, key) => (
          <Project key={key} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
