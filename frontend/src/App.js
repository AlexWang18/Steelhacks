// React Router
import { Redirect, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Home} exact />
        <Redirect path="/" />
      </Switch>
    </div>
  );
}

export default App;
