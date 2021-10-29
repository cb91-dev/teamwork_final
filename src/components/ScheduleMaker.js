import React, { useState } from "react";

function ScheduleMaker(props) {
  const [listEmployee, setlistEmployee] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  function ListOfEmployees() {
    var url = "http://localhost:8888/api/api.php?action=viewAllEmployees";
    fetch(url, { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((res) => {
        setlistEmployee(res);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        seterror(error);
      })
      .finally(() => {
        setloading(false);
      });
  }
  const [ScheduleData, setScheduleData] = useState({});

  const dayChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      Day: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      Date: event.target.value,
    });
  };
  const departmentChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      department: event.target.value,
    });
  };
  const employeeChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      employee_idNumber: event.target.value,
    });
  };
  const startTimeChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      time_till: event.target.value,
    });
  };
  const finishTimeChangeHandler = (event) => {
    setScheduleData({
      ...ScheduleData,
      time_from: event.target.value,
    });
  };

  function createSchedule(evt) {
    evt.preventDefault();
    // let newScheduleData = {
    //   ScheduleData,
    // };
    let object = {};
    const data = new FormData(evt.target.parentNode);
    data.forEach(function (value, key) {
      object[key] = value;
    });
    console.log(object);

    // console.log(newScheduleData);
    var url = "http://localhost:8888/api/api.php?action=createSchedule";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
      credentials: "include",
    }).then(function (headers) {
      if (headers.status === 201) {
        console.log("it worked from this end");
        props.showAlert("success", "Shift added");
      }
      if (headers.status === 401) {
        props.showAlert("error", "This action didn't work");
      }
      if (headers.status === 429) {
        props.showAlert("error", "This action didn't work");
      }
      if (headers.status === 500) {
        props.showAlert("error", "This action didn't work");
      }
    });
  }

  return (
    <div>
      <article className="message is-link">
        <div className="message-header">
          <p onClick={ListOfEmployees} className="is-size-5">
            ScheduleMarker
          </p>
        </div>
        <div className="message-body has-background-white">
          <form>
            <div className="field">
              <label className="label">Date</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  name="Date"
                  id="Date"
                  onChange={dateChangeHandler}
                  className="input"
                  type="date"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Day</label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={dayChangeHandler}
                    name="Day"
                    id="Day"
                    defaultValue={"DEFAULT"}
                  >
                    <option disabled value="DEFAULT">
                      {" "}
                      -- select a day --{" "}
                    </option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Department</label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={departmentChangeHandler}
                    name="Department"
                    id="Department"
                    defaultValue={"DEFAULT"}
                  >
                    <option disabled value="DEFAULT">
                      {" "}
                      -- select a department --{" "}
                    </option>
                    <option value="Front Counter">Front Counter</option>
                    <option value="Fresh Produce">Fresh Produce</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Deli">Deli</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Employee</label>
              <div className="control">
                <div className="select">
                  <select
                    onChange={employeeChangeHandler}
                    name="employee_idNumber"
                  >
                    {listEmployee.map((Employee) => (
                      <option
                        // key={Employee.employees_idNumber}
                        // id={Employee.employees_idNumber}
                        value={Employee.employees_idNumber}
                      >
                        {Employee.firstName + " " + Employee.lastName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Start Time</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  onChange={startTimeChangeHandler}
                  name="time_from"
                  className="input"
                  type="text"
                  id="startTime"
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-clock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Finish Time</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  onChange={finishTimeChangeHandler}
                  name="time_till"
                  className="input"
                  type="text"
                  id="time_till"
                />
                <span className="icon is-small is-left">
                  <i className="far fa-clock"></i>
                </span>
              </div>
            </div>
            <button onClick={createSchedule} className="button is-link">
              Create
            </button>
          </form>
        </div>
      </article>
    </div>
  );
}

export default ScheduleMaker;
