import React, { useState, useEffect } from "react";

import EmployeeFormNew from "./EmployeeFormNew";
import EmployeeList from "./EmployeeList";

export default function Employee(props) {
  const [dataEmployee, setDataEmployee] = useState([]);

  function sendUsersData(res) {
    props.parentCallBacksendUsersData(res);
  }

  // // Hosting URL
  // const url = "https://bennettdesigns.dev/teamwork/api/api.php";
  // Local host/local development
  const url = "http://localhost:8888/api/api.php";
  useEffect(() => {
    setInterval(function () {
      if (localStorage.getItem("Admin") === "ok") {
        callEmployee();
      }
    }, 1200);
  });
  function callEmployee() {
    fetch(url + "?action=viewAllEmployees", { credentials: "include" })
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
      });
  }

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
            callEmployee={callEmployee}
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
            <EmployeeFormNew
              // newResults={newResults}
              showAlert={props.showAlert}
              closer={closer}
            />
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
