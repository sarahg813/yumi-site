import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Bookings from "./components/Bookings";
import Classes from "./components/Classes";
import ImageGallery from "./components/ImageGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import theme from "./theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faEnvelope, faPhone);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: "100vh",
    width: "100vw"
  },
  main: {
    display: "flex",
    flex: "auto",
    width: "100vw",
    padding: 0
  }
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <CssBaseline />
            <Navbar />
            <Container component="main" className={classes.main}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={ImageGallery} />
              <Route path="/classes" component={Classes} />
              <Route path="/bookings" component={Bookings} />
              <Route path="/contact" component={Contact} />
            </Container>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
