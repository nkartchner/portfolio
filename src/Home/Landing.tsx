import React from "react";
import clsx from "clsx";
import myVideoMp4 from "./media/dyno.mp4";
import myVideoWebM from "./media/dyno_converted.webm";

import { makeStyles, createStyles, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    landingRoot: {
      height: "100vh",
      width: "100%",
    },
    absPos: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    overlay: {
      zIndex: 1,
      background: "#225470",
      opacity: 0.85,
    },
    landingContent: {
      zIndex: 2,
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: theme.palette.text.primary,
      display: "flex",
      flexDirection: "column",
    },
    videoContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 0,
    },

    video: {
      objectFit: "cover",
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: 0,
      left: 0,
    },
  })
);

const Landing: React.FC = () => {
  const classes = useStyles();
  const playerRef = React.useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    playerRef.current!.play();
  };
  return (
    <div className={classes.landingRoot}>
      <div className={clsx(classes.absPos, classes.overlay)} />
      <div className={clsx(classes.absPos, classes.landingContent)}>
        <div className={classes.text}>
          <h1>Hello,</h1>
          <h2>I'm Nathan</h2>
          <h2>Full Stack Developer</h2>
          <Button color="primary" variant="contained" href={`/portfolio/about`}>
            Click to enter
          </Button>
        </div>
      </div>
      <div className={classes.videoContainer}>
        <video
          className={classes.video}
          ref={playerRef}
          muted
          loop
          controls={false}
          playsInline
          disablePictureInPicture={true}
          onLoadedData={handlePlay}
        >
          <source src={myVideoWebM} type="video/webm" />
          <source
            src={myVideoMp4}
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
        </video>
      </div>
    </div>
  );
};

export default Landing;
