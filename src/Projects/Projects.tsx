import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as thumbs from "./screenshots";
import Project, { IProps } from "./Project";
import TechIcons from "../About/technologies";

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
      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
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
    shortDesc: (
      <Typography variant="body1">
        Real-time Kanban production workflow/management application for the
        automotive repair industry.
      </Typography>
    ),
    longDesc: (className) => {
      return (
        <>
          <Typography paragraph>
            The idea for Repairsage was to create Kanban based system that would
            allow an auto repair center to see, predict and, manage the
            production in real time. Repairsage is equipped with email updates,
            push notifications, and is a PWA.
          </Typography>
          <Typography paragraph>
            The UI of Repairsage is built using Angular-Material and with the
            help of the CDK Drag-and-Drop component and a custom autoscroller,
            we're able to create a fully functional Kanban board. Mix that with
            SocketIO to generate real-time updates for every board while using
            rooms to keep each board separate.
          </Typography>
          <Typography paragraph>
            One of the most important features of Repairsage is the ability to
            assign a technician to a column and an efficiency rating per
            department. Once a technician is assigned a column on a board, their
            will be letters representing the name of each department. The number
            following the department(s) they are assigned to will change color
            and, based on a 40 hour work week, the color will be Green, Orange,
            or Red to indicate the load level for their week. We currently have
            an instance of Repairsage launched that we use as a demo. Feel free
            to check it out!
          </Typography>
        </>
      );
    },
    inProgress: true,
    Avatar: TechIcons.Angular10,
    startDate: new Date(Date.parse("02/01/2019")),
    technologies: [
      TechIcons.Angular10,
      TechIcons.Ngrx,
      TechIcons.Express,
      TechIcons.Mongo,
      TechIcons.Scss,
      TechIcons.SocketIO,
      TechIcons.Typescript,
      TechIcons.Aws,
    ],
    links: {
      website: "https://314solutions.info",
    },
    screenshots: thumbs.rprsageThumbs,
  },
  {
    title: "Last Oasis Clan Manager (WIP)",
    shortDesc: (
      <Typography variant="body1">
        Clan manager application for Last Oasis
      </Typography>
    ),
    longDesc: (className) => (
      <Typography paragraph>
        I wanted to build a project using React + Redux and C# as the back end.
        I ended up choosing a Clan manager application for a recently released
        game that I really enjoyed, Last Oasis. It quickly grew into something
        more than just a clan manager as wanted add a feature that recreated the
        in-game tech tree. I decided to use HTML5 canvas and add tooltips.
      </Typography>
    ),
    Avatar: TechIcons.React,
    startDate: new Date(Date.parse("04/05/2020")),
    technologies: [
      TechIcons.CSharp,
      TechIcons.React,
      TechIcons.Typescript,
      TechIcons.Redux,
      TechIcons.Scss,
      TechIcons.MySql,
    ],
    inProgress: true,
    links: {
      github: "https://github.com/nkartchner/LastOasis_ClanManager",
      website: "https://clanmanager.nkartchner.com"
    },
    screenshots: thumbs.clanManagerThumbs,
  },
  {
    title: "Message Board",
    shortDesc: <Typography variant="body1">Simple Message Board</Typography>,
    longDesc: (className) => (
      <Typography paragraph>
        One of my very first applications I made as I went through the
        Javascript stack
      </Typography>
    ),
    Avatar: TechIcons.Js,
    inProgress: false,
    startDate: new Date(Date.parse("01/01/2020")),
    technologies: [TechIcons.Js, TechIcons.Express, TechIcons.Mongo],
    links: {
      github: "https://github.com/nkartchner/MessageBoard",
    },
    screenshots: thumbs.messageBoardThumbs,
  },
  {
    title: "Car Dashboard",
    shortDesc: (
      <Typography variant="body1">
        A simple application that I made with a group of students to show how to
        do a many to many relationship with C# MVC
      </Typography>
    ),
    startDate: new Date(Date.parse("04/05/2020")),
    Avatar: TechIcons.CSharp,
    technologies: [TechIcons.CSharp, TechIcons.Razor, TechIcons.MySql],
    inProgress: false,
    links: {
      github: "https://github.com/nkartchner/CarsDashboard",
    },
    screenshots: [],
  },
  {
    title: "React Chat App",
    shortDesc: (
      <Typography variant="body1">
        An application that I made to learn how to integrate SocketIO with
        React.
      </Typography>
    ),
    startDate: new Date(Date.parse("04/05/2020")),
    technologies: [TechIcons.React, TechIcons.SocketIO, TechIcons.Js],
    Avatar: TechIcons.React,
    inProgress: false,
    links: {
      github: "https://github.com/nkartchner/ReactChat",
    },
    screenshots: [],
  },
];
const Projects: React.FC = () => {
  const classes = useStyles();

  React.useEffect(() => {
    document.title = "Nathan's Projects";
  }, []);

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
