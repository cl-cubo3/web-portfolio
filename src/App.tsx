import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainContainer from "shared/main-container";
import AppNavbar from "shared/navbar";
import Home from "pages/home";
import CV from "pages/cv";
import Contact from "pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
