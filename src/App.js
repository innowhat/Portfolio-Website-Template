import React from "react";
import Header from "./components/sections/Header";
import Content from "./components/sections/Content";
import Footer from "./components/sections/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/widgets/ScrollToTop";
import ReactGA from "react-ga";
ReactGA.initialize(""); // Google analytics code

const App = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router>
      <ScrollToTop>
        <React.Fragment>
          <Header />
          <Content />
          <Footer />
        </React.Fragment>
      </ScrollToTop>
    </Router>
  );
};

export default App;
