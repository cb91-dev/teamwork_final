import React, { useState } from "react";

export default function EmployeeForm(props) {
  const [updatedInput, setUpdatedInput] = useState({});

  let employees_idNumber = props.employees_idNumber;
  let firstName = props.firstName;
  let department = props.department;
  let clockInNum = props.clockInNum;
  let phone_number = props.phone_number;
  let is_manager = props.is_manager;
  let lastName = props.lastName;
  let DOB = props.DOB;
  let email = props.email;

  const employeeIdHandler = () => {
    setUpdatedInput({
      ...updatedInput,
      employees_idNumber: props.employees_idNumber,
    });
    console.log(1);
  };
  const firstNameUpdateChangeHandler = (event) => {
    setUpdatedInput({
      firstName: event.target.value,
    });
    console.log(updatedInput);
  };
  const lastNameUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      lastName: event.target.value,
    });
    console.log(3);
  };
  const dateUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      DOB: event.target.value,
    });
    console.log(4);
  };
  const emailUpdateChangeHanndler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      email: event.target.value,
    });
  };
  const phoneNumberUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      phone_number: event.target.value,
    });
  };
  const clockNumberUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      clockInNum: event.target.value,
    });
  };
  const departmentUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      department: event.target.value,
    });
  };
  const is_managerUpdateChangeHandler = (event) => {
    setUpdatedInput({
      ...updatedInput,
      is_manager: event.target.value,
    });
  };

  function updateMyDetailsViewForm(evt) {
    const updatedEmployeeData = {
      employees_idNumber: employees_idNumber,
      firstName: firstName,
      department: department,
      clockInNum: clockInNum,
      phone_number: phone_number,
      is_manager: is_manager,
      lastName: lastName,
      DOB: DOB,
      email: email,
    };
    console.log(updatedEmployeeData);
    evt.preventDefault(evt);
    var url = "http://localhost:8888/api/api.php?action=upDateEmployee";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(updatedEmployeeData),
      credentials: "include",
    }).then(function (headers) {
      if (headers.status === 201) {
        props.showAlert("success", "Employee added");
        props.closer();
      }
      if (headers.status === 401) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
      if (headers.status === 429) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
      if (headers.status === 500) {
        props.showAlert("error", "This action didn't work");
        props.closer();
      }
    });
  }

  return (
    <div>
      <section className="modal-card-body">
        <form>
          <div className="field">
            <label className="label">Employee Id</label>
            <div className="control has-icons-left has-icons-right">
              <input
                readOnly
                defaultValue={props.employees_idNumber}
                id={props.id}
                name="employees_idNumber"
                type="text"
                onChange={employeeIdHandler}
                className="is-size-3"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.firstName}
                onChange={firstNameUpdateChangeHandler}
                id="first_name_admin_view"
                className="input is-link"
                type="text"
                placeholder="Employees first name"
                name="firstName"
                required
                pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.lastName}
                onChange={lastNameUpdateChangeHandler}
                id="last_name_admin_view"
                className="input is-link"
                type="text"
                placeholder="Employees last name"
                name="lastName"
                required
                pattern="\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Date of Birth</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.dateOfBirth}
                onChange={dateUpdateChangeHandler}
                id="dataOfBirth_admin_view"
                className="input is-link"
                type="date"
                name="DOB"
                min="1970-01-01"
                max="2021-12-31"
                data-bouncer-message="Valid date range is from 1960 till current"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.email}
                onChange={emailUpdateChangeHanndler}
                className="input is-link"
                id="email_admin_view"
                type="email"
                name="email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.phone_number}
                onChange={phoneNumberUpdateChangeHandler}
                id="phone_number_admin_view"
                className="input is-link"
                type="number"
                name="phone_number"
                pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$"
                data-bouncer-message="Please use only Australian domestic numbers"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Clock On Number</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.clock_Number}
                onChange={clockNumberUpdateChangeHandler}
                className="input is-link"
                id="clock_Number_admin_view"
                type="number"
                data-bouncer-message="Clock number needs to be 4 digits in length"
                name="clockInNum"
                required
                maxLength="4"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Department</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={departmentUpdateChangeHandler}
                  defaultValue={props.department}
                  id="department_admin_view"
                  name="department"
                >
                  <option disabled value="DEFAULT">
                    {" "}
                    -- select a department --{" "}
                  </option>
                  <option value="Front_Counter">Front Counter</option>
                  <option value="Fresh_Produce">Fresh Produce</option>
                  <option value="Bakery">Bakery</option>
                  <option value="Deli">Deli</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Are they a manager</label>
            <div className="control">
              <div className="select">
                <select
                  onChange={is_managerUpdateChangeHandler}
                  defaultValue={props.is_manager}
                  id="manager_admin_view"
                  name="is_manager"
                >
                  {" "}
                  <option value="DEFAULT" disabled>
                    {" "}
                    -- please select --{" "}
                  </option>
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>
            </div>
          </div>
          <button onClick={updateMyDetailsViewForm} className="button is-link">
            Save changes
          </button>
        </form>
      </section>
    </div>
  );
}
