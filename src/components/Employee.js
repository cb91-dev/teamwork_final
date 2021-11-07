import React, { useState, useEffect } from "react";

import EmployeeFormNew from "./EmployeeFormNew";
import EmployeeList from "./EmployeeList";

export default function Employee(props) {
  const [dataEmployee, setDataEmployee] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  function sendUsersData(res) {
    props.parentCallBacksendUsersData(res);
  }

  useEffect(() => {
    function viewListOfEmployees() {
      var url = "http://localhost:8888/api/api.php?action=viewAllEmployees";
      fetch(url, { credentials: "include" })
        .then((response) => {
          if (response.ok) {
            props.showAlert("success", "Here is a list of current employees");
            return response.json();
          }
        })
        .then((res) => {
          setDataEmployee(res);
          sendUsersData(res);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
          seterror(error);
        })
        .finally(() => {
          setloading(false);
        });
    }
    viewListOfEmployees();
  }, [setDataEmployee]);

  const [hidden, setHidden] = useState(false);
  const ToggleClass = () => {
    setHidden(!hidden);
  };
  const [isActive, setActive] = useState(false);

  function opener() {
    setActive(true);
  }
  function closer() {
    setActive(false);
  }

  return (
    <div>
      <article className="panel is-link my-4 has-background-white">
        <p className="panel-heading has-background-link">Current Employees</p>

        <div className="panel-block is-flex is-flex-direction-column">
          <p className="pb-2 control has-icons-left">
            <input className="input is-link" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
          <div onClick={opener} className="pt-1 button is-link p-2">
            New Employee add them here
          </div>
        </div>
        {dataEmployee.map((dataEmployee, index) => (
          <EmployeeList
            key={dataEmployee.employees_idNumber}
            id={dataEmployee.employees_idNumber}
            employees_idNumber={dataEmployee.employees_idNumber}
            title={dataEmployee.firstName}
            email={dataEmployee.email}
            firstName={dataEmployee.firstName}
            lastName={dataEmployee.lastName}
            phone_number={dataEmployee.phone_number}
            is_manager={dataEmployee.is_manager}
            clock_Number={dataEmployee.clock_Number}
            department={dataEmployee.department}
            dateOfBirth={dataEmployee.DOB}
            showAlert={props.showAlert}
          />
        ))}
      </article>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add New Employee</p>
            <button
              className="delete has-background-danger"
              onClick={closer}
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <EmployeeFormNew showAlert={props.showAlert} closer={closer} />
          </section>
          <footer className="modal-card-foot">
            <button onClick={closer} className="button is-danger">
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
