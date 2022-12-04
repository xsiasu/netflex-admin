import "./App.css";
import Home from "./pages/home/Home";

import NewUser from "./pages/newUser/NewUser";

import UserList from "./pages/userList/UserList";
import MovieList from "./pages/movieList/MovieList";

import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import ListList from "./pages/listList/ListList";
// import User from "./pages/user/User";
// import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="app">
      <Router>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>

                {/* <Route path="/user/:userId">
              <User />
            </Route> */}
                <Route path="/newUser">
                  <NewUser />
                </Route>

                <Route path="/movies">
                  <MovieList />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/newMovie">
                  <NewMovie />
                </Route>
                {/* <Route path="/lists">
              <ListList />
            </Route> */}
                {/* <Route path="/list/:listId">
              <List />
            </Route> */}
                <Route path="/newlist">
                  <NewList />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
