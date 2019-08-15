import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "black",
    color: "white",
    flexShrink: 0
  },
  footerText: {
    fontFamily: "Roboto"
  },
  icons: {
    fontSize: "1.5em",
    margin: "0 1em",
    color: theme.palette.primary.main
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container xs={12} justify="space-between">
        <Grid item>
          <Typography variant="body1" className={classes.footerText}>
            &copy; 2019
          </Typography>
        </Grid>
        <Grid item>
          <a
            href="https://www.instagram.com/yu.mi.ko/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icons}
              icon={["fab", "instagram"]}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCqeQNt9-T8d9zpcSxWRc7Sw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={classes.icons}
              icon={["fab", "youtube"]}
            />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
