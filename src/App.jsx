import React from "react";
import MainPage from "./MainPage";
import Login from "./Login";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact from="/" render={(props) => <Login {...props} />} />
          <Route exact path="/main" component={MainPage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
