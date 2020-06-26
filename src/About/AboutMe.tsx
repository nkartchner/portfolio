import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const AboutMeSections = [
    "What Drives Me",
    "Mission Statement",
    "Bio",
    "Hobbies",
    "Previous job experience",
];
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        overflow: "auto",
    },
    section: {
        height: 500,
    },
}));
const AboutMe: React.FC = () => {
    const classes = useStyles();
    React.useEffect(() => {
        document.title = "About Nathan";
    });
    return (
        <div className={classes.root}>
            <h1>About me page</h1>
            {AboutMeSections.map((section) => (
                <div key={section} id={section} className={classes.section}>
                    {section}
                </div>
            ))}
        </div>
    );
};

export default AboutMe;
