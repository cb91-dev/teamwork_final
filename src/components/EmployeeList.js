import React, { useState } from "react";
import EmployeeForm from ".//EmployeeForm";

export default function EmployeeList(props) {
  const [isActive, setActive] = useState(false);
  const [employeeId, setEmployeeId] = useState(props.id);
  const [employeeName, setEmployeeName] = useState(
    props.title + " " + props.lastName
  );
  const employeeNameHandler = () => {
    setEmployeeName();
  };
  const employeeIdHandler = () => {
    employeeIdHandler();
  };

  function deleteEmployee(id) {
    const Employee_Num = {
      Employee_id: props.id,
    };
    // // Hosting URL
    const url = "https://bennettdesigns.dev/teamwork/api/api.php";

    fetch(url + "?action=deleteEmployee", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(Employee_Num),
    }).then(function (response) {
      if (response.status === 202) {
        props.showAlert("success", "Employee removed");
        props.callEmployee();
      }
      if (response.status === 401) {
        props.showAlert("error", "This action didn't work");
      }
      if (response.status === 500) {
        props.showAlert("error", "This action didn't work");
      }
    });
  }

  var opener = () => {
    setActive(true);
  };
  var closer = () => {
    setActive(false);
  };

  return (
    <div>
      <a className="is-flex is-justify-content-space-between panel-block is-active">
        <div onClick={opener} id={props.id}>
          <div className="panel-icon">
            <i className="fas fa-user" aria-hidden="true"></i>
          </div>
          <input
            onChange={employeeNameHandler}
            value={props.title + " " + props.lastName}
          />
        </div>
        <div
          className="button is-danger is-small"
          id={props.id}
          onClick={deleteEmployee}
        >
          Remove
        </div>
      </a>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head is-flex is-justify-content-space-between">
            <div className="is-flex-direction-column ">
              <p className="modal-card-title">
                {props.firstName + " " + props.lastName}
              </p>
              <p>Employee update form</p>
            </div>
            <button
              className="delete has-background-danger"
              onClick={closer}
              aria-label="close"
            ></button>
          </header>
          <section className="modal-card-body">
            <EmployeeForm
              key={props.employees_idNumber}
              id={props.employees_idNumber}
              email={props.email}
              firstName={props.firstName}
              lastName={props.lastName}
              phone_number={props.phone_number}
              is_manager={props.is_manager}
              clock_Number={props.clock_Number}
              department={props.department}
              employees_idNumber={props.employees_idNumber}
              dateOfBirth={props.dateOfBirth}
              showAlert={props.showAlert}
              closer={closer}
            />
          </section>
          <footer className="modal-card-foot">
            <button form="update_employee_admin" className="button is-link">
              Save changes
            </button>
            <button onClick={closer} className="button is-danger">
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
