import React, { useState } from "react";
import ScheduleMakerEmployeeList from "./ScheduleMakerEmployeeList";

function ScheduleMarker() {
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
  // function createSelectItems(listEmployee) {
  //   for (let i = 0; i <= listEmployee.length; i++) {
  //     listEmployee.push(<option key={i}>{listEmployee.firstName}</option>);
  //   }
  // }

  return (
    <div>
      <article className="message is-link">
        <div className="message-header">
          <p onClick={ListOfEmployees} className="is-size-5">
            ScheduleMarker
          </p>
        </div>
        <div className="message-body has-background-white">
          <form
            // onSubmit={CreateSchedule}
            action="http://localhost:8888/api/api.php?action=createSchedule"
          >
            <div className="field">
              <label className="label">Date</label>
              <div className="control has-icons-left has-icons-right">
                <input name="Date" className="input" type="date" />
                <span className="icon is-small is-left">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Day</label>
              <div className="control has-icons-left has-icons-right">
                <input name="Day" className="input" type="text" />
                <span className="icon is-small is-left">
                  <i className="fas fa-unlock-alt"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Department</label>
              <div className="control">
                <div className="select">
                  <select name="Department" defaultValue={"DEFAULT"}>
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
              <label className="label">Employee1</label>
              <div className="control">
                <div className="select">
                  <select name="employee_idNumber">
                    {/* {createSelectItems(listEmployee)} */}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Start Time</label>
              <div className="control has-icons-left has-icons-right">
                <input name="time_form" className="input" type="text" />
                <span className="icon is-small is-left">
                  <i className="fa fa-clock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Finish Time</label>
              <div className="control has-icons-left has-icons-right">
                <input name="time_till" className="input" type="text" />
                <span className="icon is-small is-left">
                  <i className="far fa-clock"></i>
                </span>
              </div>
            </div>
            <div type="submit" className="button is-link">
              Create
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}

export default ScheduleMarker;

// function CreateSchedule(evt) {
//   evt.preventDefault();
//   var postFormData = new FormData();
//   postFormData.append(evt.target[0].name, evt.target[0].value);
//   postFormData.append(evt.target[1].name, evt.target[1].value);
//   postFormData.append(evt.target[2].name, evt.target[2].value);
//   postFormData.append(evt.target[3].name, evt.target[3].value);
//   postFormData.append(evt.target[4].name, evt.target[4].value);
//   postFormData.append(evt.target[5].name, evt.target[5].value);
//   fetch(evt.target.action, {
//     method: "POST",
//     body: postFormData,
//     credentials: "include",
//   }).then(function (headers) {
//     if (headers.status === 201) {
//     }
//     headers.text().then(function (body) {
//       document.getElementById("insert_box_msg").innerHTML = body;
//     });
//   });
// }
