import React, { useState } from "react";
import Employee from "./components/Employee";
import ScheduleMaker from "./components/ScheduleMaker";

export default function App(props) {
  const [userData, setEmployeeData] = useState({});
  function parentCallBacksendUsersData(userData) {
    setEmployeeData(userData);
  }

  function showAlert(msgtype, msg) {
    document.getElementById("alertbox").removeAttribute("hidden");
    document.getElementById("alertmsg").innerHTML = msg;
    window.setTimeout(function () {
      hideAlert();
    }, 10000);
    if (msgtype === "success") {
      document.getElementById("alertbox").style.backgroundColor =
        "rgb(41, 109, 219)";
      document.getElementById("alertbox").style.color = "rgb(255, 255, 255)";
    }
    if (msgtype === "warning") {
      document.getElementById("alertbox").style.backgroundColor =
        "rgb(255, 221, 87)";
    }
    if (msgtype === "error") {
      document.getElementById("alertbox").style.backgroundColor =
        "rgb(255, 56, 96)";
      document.getElementById("alertbox").style.color = "rgb(255, 255, 255)";
    }
  }
  function hideAlert() {
    document.getElementById("alertbox").setAttribute("hidden", "hidden");
  }

  return (
    <div>
      {" "}
      {/* THIS IS OUR ERROR DISPLAY */}
      <div
        className="notification mb-0"
        id="alertbox"
        onClick={hideAlert}
        hidden
      >
        <button className="delete" id="alertclose"></button>
        <div id="alertmsg">ERRO MSG</div>
      </div>
      <div className="hidden" id="loader">
        <div className="is-flex is-justify-content-center is-flex-direction-column-reverse">
          <progress className="progress is-large is-link" max="100">
            20%
          </progress>
          <p className="has-text-centered is-size-4">
            Hang tight we are loading
          </p>
        </div>
      </div>
      <div className="hidden" id="loader-theme">
        <div className="loader"></div>
      </div>
      <Employee
        parentCallBacksendUsersData={parentCallBacksendUsersData}
        showAlert={showAlert}
      />
      <ScheduleMaker user={userData} showAlert={showAlert} />
    </div>
  );
}
