import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Arrow from "@material-ui/icons/ArrowBackTwoTone";

const useStyles = makeStyles(() =>
    createStyles({
        iFrame: {
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            zIndex: 100000,
        },
        pdfHeader: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            zIndex: 100001,
        },
        pdfControls: {
            position: "absolute",
            top: 50,
            left: 15,
        },
    })
);
const Resume = () => {
    const [showControls, setShowControls] = React.useState<boolean>(false);
    const classes = useStyles();
    const history = useHistory();

    const handleCloseResume = React.useCallback(() => {
        history.goBack();
    }, [history]);

    const handleKeydown = React.useCallback(
        ({ keyCode }: KeyboardEvent) => {
            if (keyCode === 27) handleCloseResume();
        },
        [handleCloseResume]
    );

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    }, [handleKeydown]);

    return (
        <>
            {showControls && (
                <div className={classes.pdfHeader}>
                    <IconButton
                        color="secondary"
                        onClick={handleCloseResume}
                        className={classes.pdfControls}
                    >
                        <Arrow fontSize="large" />
                    </IconButton>
                </div>
            )}
            <iframe
                src="/public/Nathan_Kartchner_Resume.pdf"
                className={classes.iFrame}
                typeof="application/pdf"
                onLoad={() => setShowControls(true)}
                title="resume"
            />
        </>
    );
};

export default Resume;
