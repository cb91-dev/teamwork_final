import React, { useState } from "react";
import EmployeeForm from ".//EmployeeForm";

export default function EmployeeList(props) {
  const [isActive, setActive] = useState(false);

  function opener() {
    setActive(true);
  }
  function closer() {
    setActive(false);
  }
  return (
    <div>
      <a className="is-flex is-justify-content-space-between panel-block is-active">
        <div onClick={opener} id={props.id}>
          <div className="panel-icon">
            <i className="fas fa-user" aria-hidden="true"></i>
          </div>
          {props.title}
        </div>
        <div className="button is-danger is-small">Remove</div>
      </a>
      <div className={`modal ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {props.firstName + " " + props.lastName}
            </p>
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
