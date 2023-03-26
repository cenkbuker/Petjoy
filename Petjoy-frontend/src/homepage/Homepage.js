import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../login/UserContext";
import Carousel from "react-multi-carousel";
function Homepage() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);
    return (
        <div className="Homepage">
          <div className="container text-center">
            <h1 className="mb-4 font-weight-bold">Petjoy</h1>
            <p className="lead">All pet accessories you looking for.</p>
            {currentUser
                ? <h2>
                  Welcome Back, {currentUser.firstName || currentUser.username}!
                </h2>
                : (
                    <p>
                      <Link className="btn btn-secondary font-weight-bold m-3"
                            to="/login">
                        Log in
                      </Link>
                      <Link className="btn btn-secondary font-weight-bold"
                            to="/signup">
                        Sign up
                      </Link>
                    </p>
                    
                )}
          </div>
        </div>
    );
  }
  
  export default Homepage;