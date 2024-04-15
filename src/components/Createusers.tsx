import "./register.css";
const Createusers = () => {
  const register = () => {};
  const  toogleDrop = ()=>{};
  return (
    <>
      <div className="form-container">
        {/* <div className="left-img">
       <img src="./assets/register.svg" alt="loginimg" />
       <div className="loginForm">
           <p>Already a member click here to <a href="./signin.html"> Login</a> </p>
       </div>
     </div>   */}
        <div className="form">
          <div className="top-bar ">
            <h3>Register</h3>
          </div>
          <div className="input-fields">
            <div
              style={{ backgroundColor: " red; color: white;" }}
              itemID="error"
            >
              *Please Fill all the details
            </div>
            <div style={{ width: "100%" }}>
              <input
                className="border"
                style={{ width: "100%" }}
                type="text"
                placeholder="  Gym itemID"
                itemID="gymitemID"
              />
              <span className="error">*Please fill the details</span>
            </div>
            <div className="username">
              <div className="flex">
                <input
                  className="border"
                  type="text"
                  placeholder="  Firstname"
                  itemID="fname"
                />
                <span className="error">*Please fill the details</span>
              </div>
              <div className="flex">
                <input
                  className="border"
                  type="text"
                  placeholder="Lastname"
                  itemID="lname"
                />
                <span className="error">*Please fill the details</span>
              </div>
            </div>
            <input
              className="border"
              type="number"
              style={{ width: "100%" }}
              placeholder="Phone Number"
              max="10"
              itemID="phonenumber"
            />
            <span className="error">*Please fill the details</span>

            <div className="age">
              <div className="flex">
                <input
                  className="border"
                  type="number"
                  placeholder="age"
                  itemID="age"
                />
                <span className="error">*Please fill the details</span>
              </div>
              <div className="flex" style={{ flexGrow: "1" }}>
                <select className="border" name="gender" itemID="gender">
                  <option>Select your gender</option>

                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
                <span className="error">*Please fill the details</span>
              </div>
            </div>
            <div className="userInitials">
              <div className="flex">
                <input
                  className="border"
                  type="number"
                  placeholder="height(cm)"
                  itemID="height"
                />
                <span className="error">*Please fill the details</span>
              </div>
              <div className="flex">
                <input
                  className="border"
                  type="number"
                  placeholder="weight(kg)"
                  itemID="weight"
                />
                <span className="error">*Please fill the details</span>
              </div>
            </div>

            <div className="goals">
              <p
                onClick={void toogleDrop()}
                className="selectGoals"
                style={{ display: "flex", cursor: " pointer;" }}
              >
                Select your goals:{" "}
              </p>
              <div className="dropdown ">
                <div className=" dropdown2 toggleDrop ">
                  <li>
                    <label htmlFor="loseweight">Lose Weight:</label>
                    <input type="checkbox" name="loseweight" />
                  </li>
                  <li>
                    <label htmlFor="gainweight">Gain Weight:</label>
                    <input type="checkbox" name="gainweight" />
                  </li>
                  <li>
                    <label htmlFor="maintainHealth">Maintain Health:</label>
                    <input type="checkbox" name="maintainHealth" />
                  </li>
                  <li>
                    <label htmlFor="BuildMuscle">Build Muscle:</label>
                    <input type="checkbox" name="BuildMuscle" />
                  </li>
                  <li>
                    <label htmlFor="MaintainMuscle">Maintain Muscle:</label>
                    <input type="checkbox" name="MaintainMuscle" />
                  </li>
                  <li>
                    <label htmlFor="others">Others:</label>
                    <input type="checkbox" name="others" />
                  </li>
                </div>
              </div>
            </div>

            <div className="btn-register">
              <button type="submit" onClick={void register()}>
                Register
              </button>
              <img
                style={{ display: "none" }}
                itemID="loader"
                src="https://cdn.discordapp.com/attachments/1202007544332308540/1227240265119436891/preloader.gif?ex=6627af90&is=66153a90&hm=b2d33f7afb5df905e20cfba475eaca8ac74676e5fb7872315a58de325e10bf39&"
                alt=""
                srcSet=""
              />
              <p>
                Already a member click here to{" "}
                <a href="./signin.html"> Login</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createusers;
