import React from 'react';
import "./Addproject.css";

export default function Addproject(){
return (
    <div  className="addproject1" style={{ paddingLeft: "5%" }}>
      <div >
        
        <div className="form1 ">
          <div >
            <div className='top'>Add a Project</div>         
          </div>

          <div className="bottom ">
            <form>
             Name: <input
                type="text"
                id=""
                name="userName"
                placeholder="Name"
              ></input>
              
              Email: <input
                  type="email"
                  id=""
                  name="email"
                  placeholder="Email"
                ></input>
              
              Password: <input
                type="password"
                id=""
                name="password"
                placeholder="Password"
              ></input>
                         
                         Firm: <input
                type="text"
                id=""
                name="firm"
                placeholder="Firm"
              ></input>

Website: <input
                type="text"
                id=""
                name="Website"
                placeholder="Website"
              ></input>

              <button className="sub" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/*---------------------- main class ends here---------------------- */}
      </div>
    </div>
  );
}   