import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ProfilePic from "./avatar.jpg";
import TechnologyIcons from "./technologies";
import Tooltip from "../Core/Tooltip";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflow: "auto",
        height: "100%",
        padding: theme.spacing(0, 2),
    },
    about: {
        padding: theme.spacing(3),
        margin: theme.spacing(3, 0),
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "350px auto",
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "100%",
            gridTemplateRows: "max-content auto",
            rowGap: "20px",
        },
    },

    profilePic: {
        height: 250,
        borderRadius: "50%",
        justifySelf: "center",
        gridRow: 1,
    },
    aboutI: {
        display: "grid",
        gridTemplateRows: "auto auto",
        gridColumn: 1,
        textAlign: "right",
        [theme.breakpoints.down("xs")]: {
            gridColumn: 1,
            gridRow: 1,
            textAlign: "center",
        },
    },
    name: {
        gridRow: 2,
        padding: theme.spacing(0, 2),
        marginTop: theme.spacing(1),
    },
    title: {
        padding: theme.spacing(0, 2),
        gridRow: 3,
    },
    aboutP: {
        display: "grid",
        gridColumn: 2,
        padding: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
            gridRow: 2,
            gridColumn: 1,
        },
    },
    p1: {
        marginBottom: theme.spacing(2),
    },
    technologies: {
        display: "grid",
        margin: theme.spacing(3, 0),
        padding: theme.spacing(2),
        gap: "15px",
    },
    techTitle: {
        gridRow: 1,
    },
    technologyIcons: {
        gridRow: 2,
        display: "grid",
        columnGap: "10px  ",
        rowGap: "15px",
        justifyItems: "center",
        gridAutoFlow: "row dense",
        gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
    },

    icon: {
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        position: "relative",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
        },
    },
    link: {
        color: "lightblue",
    },
}));
const AboutMe: React.FC = () => {
    const classes = useStyles();
    React.useEffect(() => {
        document.title = "About Nathan";
    }, []);
    return (
        <div className={classes.root}>
            <Paper elevation={8} className={classes.about}>
                <div className={classes.aboutI}>
                    <img
                        className={classes.profilePic}
                        src={ProfilePic}
                        alt="profile"
                    />
                    <Typography
                        gutterBottom
                        className={classes.name}
                        variant="h4"
                    >
                        Nathan Kartchner
                    </Typography>
                    <Typography className={classes.title} variant="h5">
                        Full Stack Engineer
                    </Typography>
                </div>
                <div className={classes.aboutP}>
                    <Typography
                        className={classes.p1}
                        variant="body1"
                        component="p"
                    >
                        Prior to being a Full Stack Engineer, I worked at a
                        collision shop (as my first ever job at 16 years old) in
                        Seattle for 9 years starting out as an Administrative
                        Assistant and I.T manager eventually working my way as
                        the shops Mechanic.
                    </Typography>
                    <Typography variant="body1" component="p">
                        My love for cars, engines, and the need to know how
                        things work internally helped lead my success as a
                        mechanic. I went to school for high performance tuning
                        which was the gateway that helped find my passion for
                        programming. After graduating school as a Full Stack
                        Engineer, I accepted a job as a consultant on an
                        application that my old job wanted to build, called
                        Repairsage. Repairsage is a production management
                        application targeting the automotive repair industry. My
                        ability to deliver extraordinary results comes straight
                        from my ability to convert all my prior industry
                        experience to code.
                    </Typography>
                </div>
            </Paper>

            <Paper elevation={8} className={classes.technologies}>
                <Typography variant="h4">Technologies</Typography>
                <div className={classes.technologyIcons}>
                    {TechnologyIcons.map((icon) => (
                        <Tooltip {...icon} key={icon.alt} />
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default AboutMe;
