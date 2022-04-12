import React, { useState } from "react";
import "./registerAndLogin.scss";
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
    <div style={{ paddingLeft: "5%" }}>
      <div className="main">
        <img
          className="bgImg"
          src="https://livinator.com/wp-content/uploads/2015/07/myvibemylife.jpg"
          alt="img"
        />
        <div className="form">
          <div className="topPart">
            <button className="btnSignUp" onClick={handleSignUp}>
              SignUp
            </button>
            <button className="btnSignIn" onClick={handleSignIn}>
              SignIn
            </button>
          </div>

          <div className="bottomPart">
            <form>
              <input
                type="text"
                id=""
                name="userName"
                placeholder="username"
              ></input>
              {!isRegistered && (
                <input
                  type="email"
                  id=""
                  name="email"
                  placeholder="email"
                ></input>
              )}
              <input
                type="password"
                id=""
                name="password"
                placeholder="password"
              ></input>
              <button className="btnRegister" type="submit">
                {!isRegistered ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
        {/*---------------------- main class ends here---------------------- */}
      </div>
    </div>
  );
}
