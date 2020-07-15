import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
    showMore: {
        color: "lightblue",
        textDecoration: "underline",
        cursor: "pointer",
    },
}));
const AboutMe: React.FC = () => {
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
                        <Typography
                            variant="overline"
                            onClick={handleToggleShortBio}
                        >
                            {shortBio
                                ? "Click for short bio"
                                : "Click for long bio"}
                        </Typography>
                    </div>
                    {shortBio ? (
                        <>
                            <Typography paragraph>
                                I am versatile Full Stack web developer and a
                                powerhouse of value added. I am inspired by
                                excellence, success, and failure. I am a
                                powerhouse of positivity and value added. I
                                thrive to learn the how things function together
                                as a unit. My attention to detail is second to
                                none, and my actions demonstrate that I am
                                principled and operate from a platform of
                                integrity in everything I do.
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography paragraph>
                                Prior to being a Full Stack Engineer, I worked
                                at a collision shop (as my first ever job at 16
                                years old) in Seattle for 9 years starting out
                                as an Administrative Assistant and I.T manager
                                eventually working my way as the shops Mechanic.
                            </Typography>
                            <Typography paragraph>
                                My love for cars, engines, and the need to know
                                how things work internally helped lead my
                                success as a mechanic. After a short time as a
                                mechanic, my thirst for more kicked and I
                                ventured to go back to school for and become
                                certified in high performance tuning. Due to the
                                lack of demand, I dabbled in some javascript and
                                shortly found my passion for programming.
                            </Typography>

                            <Typography paragraph>
                                After graduating as a Full Stack Engineer, I
                                accepted a job as a consultant on an application
                                that my old job wanted to build, called
                                Repairsage. Repairsage is a real-time production
                                management application targeted for the
                                automotive repair industry. My ability to
                                deliver extraordinary results comes straight
                                from my my ability to identify the similarities
                                between my prior industry experience and my
                                code. You can read more about, and demo,
                                Repairsage in my {projects} page.
                            </Typography>
                        </>
                    )}
                </div>
            </Paper>

            <Paper elevation={8} className={classes.technologies}>
                <Typography variant="h4">Technologies</Typography>
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
