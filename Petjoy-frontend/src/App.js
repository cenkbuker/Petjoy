import './App.css';
import UserContext from "./login/UserContext";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'
import PetJoy from "./api/api";
import useLocalStorage from "./hooks/useLocalStorage";
import LoadingSpinner from "./common/LoadingSpinner";
import NavBar from './routes-nav/NavBar';
import Routes from "./routes-nav/Routes";

export const TOKEN_STORAGE_ID = "Petjoy-token"

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  useEffect(function loadUserInfo() {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          PetJoy.token = token;
          let currentUser = await PetJoy.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(signupData) {
    try {
      let token = await PetJoy.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }
  async function login(loginData) {
    try {
      let token = await PetJoy.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <LoadingSpinner />;
  return (

      <BrowserRouter>
        <UserContext.Provider
            value={{ currentUser, setCurrentUser }}>
          <div className="App">
            <NavBar logout={logout} />
            <Routes login={login} signup={signup} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>

  );
}

export default App;
