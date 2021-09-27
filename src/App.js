import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import ResturantCreate from "./components/ResturantCreate";
import ResturantDetail from "./components/ResturantDetail";
import ResturantSearch from "./components/ResturantSearch";
import ResturantList from "./components/ResturantList";
import ResturantUpdate from "./components/ResturantUpdate";
import Home from "./components/Home";
import Login from "./components/Login";
import Protected from "./components/Protected";
import trymes from "./Trymes";

import Logout from "./components/Logout";
function App() {
  return (
    <div className="App">
      <Router>
        <Protected exact path="/" component={Home} />
        <Protected exact path="/list" component={ResturantList} />
        <Protected exact path="/create" component={ResturantCreate} />
        <Protected exact path="/search" component={ResturantSearch} />
        <Protected exact path="/details" component={ResturantDetail} />
        <Protected exact path="/update/:id" component={ResturantUpdate} />
        {/* <Route exact path="/" component={Home}></Route> */}

        {/* <Route exact path="/list" component={ResturantList}></Route>
        <Route exact path="/create" component={ResturantCreate}></Route>
        <Route exact path="/search" component={ResturantSearch}></Route>
        <Route exact path="/details" component={ResturantDetail}></Route> */}
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/try" component={trymes}></Route>
        {/* <Route
          exact
          path="/update/:id"
          render={(props) => <ResturantUpdate {...props} />}
        ></Route> */}
        <Route
          exact
          path="/login/"
          render={(props) => <Login {...props} />}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
