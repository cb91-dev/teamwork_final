import { render } from "preact";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function ScheduleMakerForm(props) {
  const users = Object.values(props.usersInfo);
  const [scheduleData, setscheduleData] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  const [title, setTitle] = useState([]);
  const [employeeId, setEmployeeId] = useState([]);
  const [shiftMsg, setShiftMsg] = useState([]);

  let scheduleDataFinal = scheduleData.concat(
    start,
    end,
    title,
    employeeId,
    shiftMsg
  );

  function sendRenderData(res) {
    props.parentCallBackSendRenderData(res);
  }
  const handleReset = () => {
    Array.from(document.querySelectorAll(".scheduleInputs")).forEach(
      (input) => (input.value = "")
    );
    setscheduleData([]);
  };
  // // Hosting URL
  // const url = "https://bennettdesigns.dev/teamwork/api/api.php";
  // Local host/local development
  const url = "http://localhost:8888/api/api.php";

  const employeeIdHandler = (e) => {
    setEmployeeId(e.target.value);
    showEmployeeAvial();
  };
  const showEmployeeAvial = () => {
    fetch(url + `?action=viewAvail&id=${employeeId}`, {
      credentials: "include",
    }).then(function (response) {
      console.log(response);
    });
  };

  function createNewShift(evt) {
    const newShift = {
      scheduleDataFinal,
    };
    evt.preventDefault(evt);
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    sendRenderData(newShift);
    fetch(url + "?action=addSchedule", {
      method: "POST",
      body: JSON.stringify(newShift),
      credentials: "include",
    }).then(function (response) {
      if (response.status === 201) {
        props.showAlert("success", "Shift added");
        props.closer();
        sendRenderData(response);
        handleReset();
        localStorage.setItem("Admin", "ok");
      }
      if (response.status === 401) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
      if (response.status === 429) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
      if (response.status === 500) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
    });
  }
  let inputProps = {
    placeholder: "Please click ",
    type: "text",
  };
  return (
    <div>
      <form onSubmit={createNewShift} id="createNewShiftForm">
        <div className="scheduleDateInputsParent">
          <label className="label">Start Date/Time</label>
          <Datetime
            inputProps={inputProps}
            value={start}
            className="is-link scheduleInputs"
            onChange={(date) => setStart(date)}
          />
        </div>

        <div className="scheduleDateInputsParent">
          <label className="label">Finish Date/Time</label>
          <Datetime
            inputProps={inputProps}
            value={end}
            className="is-link scheduleInputs"
            onChange={(date) => setEnd(date)}
          />
        </div>

        <div className="field">
          <label className="label">Employee</label>
          <div className="control">
            <div className="select is-link">
              <select onChange={employeeIdHandler}>
                <option disabled>Select Employee</option>
                {users.map((user, index) => (
                  <option
                    key={user.employees_idNumber}
                    id={user.employees_idNumber}
                    value={user.employees_idNumber}
                  >
                    {user.firstName + " " + user.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="has-text-centered label">Staff Availabilities</div>
        <div className="control pb-3 is-flex is-justify-content-space-between">
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="mon" />
            Mon
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="tue" />
            Tue
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="wed" />
            Wed
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="thur" />
            Thur
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="fri" />
            Fri
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="sat" />
            Sat
          </label>
          <label className="checkbox">
            <input type="checkbox" name="foobar" id="sun" />
            Sun
          </label>
        </div>
        <div className="field">
          <label className="label">Shift Message</label>
          <div className="control">
            <textarea
              onChange={(e) => setShiftMsg(e.target.value)}
              className="textarea is-link scheduleInputs"
              placeholder="Some message for the shift/employee"
            ></textarea>
          </div>
        </div>

        <div className="field">
          <p className="label">Department</p>
          <p className="pb-2">Please select one from below</p>
          <div className="control">
            <label className="radio pt-1">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="checkbox"
                name="Front_Counter"
                id="Front_Counter"
                value="Front_Counter"
                className="scheduleInputs"
              />
              Front Counter
            </label>
            <label className="radio px-1 pt-1">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="checkbox"
                name="Fresh_Produce"
                id="Fresh_Produce"
                value="Fresh_Produce"
                className="scheduleInputs"
              />
              Fresh Produce
            </label>
            <label className="radio pt-1">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="checkbox"
                name="Bakery"
                id="Bakery"
                value="Bakery"
                className="scheduleInputs"
              />
              Bakery
            </label>
            <label className="radio pl-1 pt-1">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="checkbox"
                name="Deli"
                id="Deli"
                value="Deli"
                className="scheduleInputs"
              />
              Deli
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
