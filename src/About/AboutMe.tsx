import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ProfilePic from "./avatar.jpg";
import TechnologyIcons from "./technologies";
import Tooltip from "../Core/Tooltip";
import { NavLink } from "react-router-dom";

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
        gap: "10px",
        alignItems: "start",
        gridTemplateColumns: "1fr 3.5fr",
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
        gridTemplateRows: "min-content auto",
        gridColumn: 2,
        height: "100%",
        width: "100%",
        gap: "10px",
        alignItems: "start",
        [theme.breakpoints.down("xs")]: {
            gridRow: 2,
            gridColumn: 1,
        },
    },
    bio: {
        display: "grid",
        gridRow: 2,
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
        gap: "15px",
        gridAutoFlow: "row",
        justifyContent: "center",
        justifyItems: "center",
        gridTemplateColumns: "repeat(auto-fill, 70px)",
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
    showMore: {
        color: "lightblue",
        cursor: "pointer",
        gridRow: 1,
    },
}));
interface Props {}
const AboutMe: React.FC<Props> = () => {
    const [shortBio, setShortBio] = React.useState<boolean>(true);
    const classes = useStyles();
    const handleToggleShortBio = () => {
        setShortBio(!shortBio);
    };
    React.useEffect(() => {
        document.title = "About Nathan";
    }, []);
    const projects = (
        <NavLink className={classes.link} to="/portfolio/projects">
            projects
        </NavLink>
    );
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
                    <div className={classes.showMore}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleToggleShortBio}
                        >
                            {shortBio
                                ? "Click for long bio"
                                : "Click for short bio"}
                        </Button>
                    </div>
                    <div className={classes.bio}>
                        {shortBio ? (
                            <>
                                <Typography paragraph>
                                    I am a versatile Full Stack web developer.
                                    The primary platform for my work style is
                                    excellence. I am inspired by my successes
                                    and failures. I am a powerhouse of
                                    positivity and am motivated to provide value
                                    added work in everything I do. I have the
                                    unique ability to see the big picture and
                                    the interconnectedness between things, yet
                                    can also thrive in the ability to understand
                                    the independent micro functionality in each
                                    part of what I do. My work ethic and actions
                                    demonstrate that I am principled and operate
                                    with integrity in everything I do.
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography paragraph>
                                    I'm a family man with a Wife, and 1 little
                                    girl. I love cars, racing and... coding.
                                    Prior to being a Full Stack Engineer, I
                                    worked at a collision shop (as my first job
                                    at 16 years old) in Seattle for 9 years. I
                                    started out as an Administrative Assistant
                                    and I.T manager eventually working my way as
                                    the shops Mechanic. My biggest challenge I
                                    overcame was managing my time between all 3
                                    positions simultaneously.
                                </Typography>
                                <Typography paragraph>
                                    My love for cars, engines, and the need to
                                    know how things work internally helped lead
                                    my success as a mechanic. After a short time
                                    as a mechanic, my thirst for more kicked and
                                    I ventured to go back to school for and
                                    become certified in high performance tuning.
                                    Due to the lack of demand, I dabbled in some
                                    javascript and shortly found my passion for
                                    programming.
                                </Typography>

                                <Typography paragraph>
                                    After graduating as a Full Stack Engineer, I
                                    accepted a job as a consultant on a web
                                    application that my prior workplace had a
                                    vision to build, called Repairsage.
                                    Repairsage is a real-time production
                                    management application targeted for the
                                    automotive repair industry. Thanks to my
                                    prior industry experience, I can use the
                                    skills I've developed over those 9 years to
                                    identify the similarities between diagnosing
                                    cars and debugging my code. You can read
                                    more about Repairsage in my {projects} page.
                                </Typography>
                            </>
                        )}
                    </div>
                </div>
            </Paper>

            <Paper elevation={8} className={classes.technologies}>
                <Typography variant="h5">
                    Technologies + Years of Experience
                </Typography>
                <div className={classes.technologyIcons}>
                    {Object.values(TechnologyIcons).map((icon) => (
                        <Tooltip {...icon} key={icon.alt} />
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default AboutMe;
