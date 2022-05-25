import React, { useState } from "react";
import "./registerAndLogin.scss";
import "./registerAndLogin.css";

export default function RegisterAndLogin() {
  const [isRegistered, setIsRegistered] = useState(false);

  function handleSignUp(event) {
    setIsRegistered(false);
    event.preventDefault();
  }
  function handleSignIn(event) {
    setIsRegistered(true);
    event.preventDefault();
  }
  return (
    <div  className="addproject" style={{ paddingLeft: "5%" }}>
      <div className="main">
        <img
          className="bgImg"
          src="https://livinator.com/wp-content/uploads/2015/07/myvibemylife.jpg"
          alt="img"
        />
        <div className="form ">
          <div className="topPart">
            <button className="btnSignUp" onClick={handleSignUp}>
              {/* SignOut */} Add a Project
            </button>
            <button className="btnSignIn" onClick={handleSignIn}>
              {/* SignIn */}
            </button>
          </div>

          <div className="bottomPart">
            <form>
              <input
                type="text"
                id=""
                name="userName"
                placeholder="Name"
              ></input>
              {!isRegistered && (
                <input
                  type="email"
                  id=""
                  name="email"
                  placeholder="Email"
                ></input>
              )}
              <input
                type="password"
                id=""
                name="password"
                placeholder="Password"
              ></input>
              <button className="btnRegister" type="submit">
                {!isRegistered ? "Add" : "Login"}
              </button>
            </form>
          </div>
        </div>
        {/*---------------------- main class ends here---------------------- */}
      </div>
    </div>
  );
}
