import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "./views/Home/Home";
import Videos from "./views/Videos/Videos";
import Images from "./views/Images/Images";
import NavBar from "./layout/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/videos" exact>
            <Videos />
          </Route>
          <Route path="/images" exact>
            <Images />
          </Route>
        </Switch>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
