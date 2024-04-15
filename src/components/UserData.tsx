import { FaEllipsisV, FaTimes } from "react-icons/fa";
import "./userdata.css";
import { useState } from "react";

const UserData = (e: any) => {
  const [Active, setActive] = useState(false);
  const testArray: any[] = [
    "id",
    "Firstname",
    "Lastname",
    "membershipStatus",
    "validity",
    "phonenumber",
    "age",
    "height",
    "weight",
    "gender",
    "goals",
  ];
  const dropdown = () => {
    setActive(!Active);
  };
  return (
    <>
      <div>
        <div className="user-container" onClick={dropdown}>
          <div className="user-select">
            <div className="user-id">{e.id}</div>
            <div className="user-name"> {e.name}</div>
            <div className="user-status">{e.active}</div>
            <div className="checkedIn">{e.checkin ? "w" : "checkedin"}</div>
            <div className="user-validity">{e.validity}</div>
          </div>

          <div className="user-options">
            <div className="user-time">{e.date}</div>
            <div className="user-edit">
              <FaEllipsisV />
            </div>
          </div>
        </div>
        <div className={Active ? "user-dropdown-visible" : "user-dropdown"}>
          <div className="drop-data">
            <div className="flexy">
              <div className="drop-keys">
                {testArray.map((elem, id) => {
                  return <div key={id}>{elem}:</div>;
                })}
              </div>
              <div className="drop-values">
                {testArray.map((elem, id) => {
                  return <div key={id}>{elem}:</div>;
                })}
              </div>
            </div>
            <div className="drop-btns">
              <button>lorem</button>
              <button>porem</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
