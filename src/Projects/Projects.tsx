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
        title: "Repairsage (Currently in a production environment)",
        shortDesc: (
            <Typography variant="body1">
                Real-time Kanban production workflow/management application for
                the automotive repair industry.
            </Typography>
        ),
        longDesc: (className) => {
            return (
                <>
                    <Typography paragraph>
                        Repairsage is a real-time production management
                        application for the automotive repair industry.
                        Repairsage features a kanban board setup to manage the
                        production workflow.
                    </Typography>
                    <Typography paragraph>
                        The front end uses Angular 10 with NGRX for state
                        management while the back end uses ExpressJS (written in
                        full Typescript) and MongoDB to manage the data. The app
                        utilizes SocketIO to accomplish real-time updates
                        between boards.
                    </Typography>
                    <Typography paragraph>
                        One of the most important features of Repairsage is the
                        ability to assign a technician to a column and an
                        efficiency rating per department. Once a technician is
                        assigned a column on a board, their will be letters
                        representing the name of each department. The number
                        following the department(s) they are assigned to will
                        change color and, based on a 40 hour work week, the
                        color will be Green, Orange, or Red to indicate the load
                        level for their week.
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
        title: "Last Oasis Clan Manager",
        shortDesc: (
            <Typography variant="body1">
                Clan manager application for Last Oasis
            </Typography>
        ),
        longDesc: (className) => (
            <Typography paragraph>
                I was looking at building a project using React + Redux and C#
                as the back end. I chose to create Clan manager for a recently
                released game that I really enjoyed, Last Oasis. I was able to
                incorporate HTML5 Canvas in this project to manage the tech
                tree.
                <br />
                Ultimately this project was put on hold because of the amount of
                new content that continues to come out for the game is hard to
                keep up with. Once the game hits a steady state for content, I
                will dig back in.
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
        inProgress: false,
        links: {
            github: "https://github.com/nkartchner/LastOasis_ClanManager",
            website: "https://clanmanager.nkartchner.com",
        },
        screenshots: thumbs.clanManagerThumbs,
    },
    {
        title: "Message Board",
        shortDesc: (
            <Typography variant="body1">Simple Message Board</Typography>
        ),
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
                A simple application that I made with a group of students to
                show how to do a many to many relationship with C# MVC
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
                An application that I made to learn how to integrate SocketIO
                with React.
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
