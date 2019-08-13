import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  home: {
    display: "flex",
    alignItems: "center",
    flexGrow: "1",
    "@media (max-width: 767px)": {
      height: "100%",
      minHeight: "100vh",
      background: 'url("/images/background-sm.png") center center',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "initial"
    }
  },

  video: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    "@media (min-aspect-ratio: 16/9)": {
      width: "100%",
      height: "auto"
    },
    "@media (max-aspect-ratio: 16/9)": {
      width: "auto",
      height: "100%"
    },
    "@media (max-width: 767px)": {
      display: "none"
    }
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.home}>
        <video loop autoPlay muted className={classes.video}>
          <source src="./videos/yh-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </React.Fragment>
  );
};

export default Home;
