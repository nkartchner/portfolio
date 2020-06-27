import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Home/Landing";
import Routes from "./Routes";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TopBar from "./TopBar";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      color: theme.palette.text.primary,
      display: "grid",
      height: "100%",
      gridTemplateRows: "64px calc(100% - 64px)",

      background: theme.palette.background.paper,
      position: "relative",
    },
    landingContainer: {
      maxHeight: "100%",
      minHeight: "100%",
      maxWidth: "100%",
      minWidth: "100%",
    },
    mainContent: {
      gridRow: 2,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  })
);
const MainRouter = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <div className={classes.landingContainer}>
            <Landing />
          </div>
        </Route>

        <Route path="*">
          <div className={classes.container}>
            <TopBar />
            <div className={classes.mainContent}>
              <Switch>
                {Object.values(Routes).map(({ Component, path }, i) => (
                  <Route key={i} path={path} component={Component} exact />
                ))}
              </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default MainRouter;
