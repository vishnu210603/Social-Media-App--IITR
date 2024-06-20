// src/App.js
/*

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chat from "./components/Chat";
import NewsFeed from "./components/NewsFeed";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <nav>
          <Link to="/">News Feed</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <NewsFeed />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
*/

// src/App.js

/*

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chat from "./components/Chat";
import NewsFeed from "./components/NewsFeed";
import PrivateRoute from "./components/PrivateRoute";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              News Feed
            </Button>
            <Button color="inherit" component={Link} to="/chat">
              Chat
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" className="container">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <NewsFeed />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;

*/

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chat from "./components/Chat";
import NewsFeed from "./components/NewsFeed";
import PrivateRoute from "./components/PrivateRoute";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import "./App.css";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          News Feed
        </Button>
        <Button color="inherit" component={Link} to="/chat">
          Chat
        </Button>
        {currentUser ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Container maxWidth="md" className="container">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/chat"
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
              }
            />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <NewsFeed />
                </PrivateRoute>
              }
            />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;
