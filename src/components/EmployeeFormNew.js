import React, { useState } from "react";

export default function EmployeeForm(props) {
  const [userInput, setUserInput] = useState({});

  const firstNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      firstName: event.target.value,
    });
  };
  const lastNameChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      lastName: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      DOB: event.target.value,
    });
  };
  const emailChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      email: event.target.value,
    });
  };
  const pwordChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      pword: event.target.value,
    });
  };
  const phoneNumberChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      phone_number: event.target.value,
    });
  };
  const clockNumberChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      clockInNum: event.target.value,
    });
  };
  const departmentChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      department: event.target.value,
    });
  };
  const is_managerChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      is_manager: event.target.value,
    });
  };
  // // // Local host/local development
  const url = "http://localhost:8888/api/api.php";

  // // Hosting URL
  // const url = "https://bennettdesigns.dev/teamwork/api/api.php";

  function createNewEmployee(evt) {
    const newEmployeeData = {
      userInput,
    };
    evt.preventDefault();

    fetch(url + "?action=addNewEmployee", {
      method: "POST",
      body: JSON.stringify(newEmployeeData),
      credentials: "include",
    }).then(function (headers) {
      if (headers.status === 201) {
        console.log("it worked from this end");
        props.showAlert("success", "Employee added");
        props.closer();
        localStorage.setItem("Admin", "ok");
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
            <label className="label">First Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.firstName}
                id={props.id}
                className="input is-link"
                type="text"
                placeholder="Please enter first name here"
                name="firstName"
                required
                onChange={firstNameChangeHandler}
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
                className="input is-link"
                type="text"
                name="lastName"
                required
                placeholder="Please enter last name here"
                onChange={lastNameChangeHandler}
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
                className="input is-link"
                type="date"
                name="DOB"
                onChange={dateChangeHandler}
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
                className="input is-link"
                onChange={emailChangeHandler}
                type="email"
                placeholder="Please enter a valid email here"
                name="email"
                required
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-link"
                type="password"
                name="pword"
                required
                placeholder="Please enter a password here"
                onChange={pwordChangeHandler}
                data-bouncer-message="Password must contain a min of 6 characters long with one upper case chartcter and at least one digit"
                pattern="((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-unlock-alt"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.phone_number}
                className="input is-link"
                type="text"
                placeholder="Please enter a phone number here"
                onChange={phoneNumberChangeHandler}
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
                className="input is-link"
                placeholder="Please enter a clock number here"
                type="number"
                onChange={clockNumberChangeHandler}
                data-bouncer-message="Clock number needs to be 4 digits in length"
                name="clockInNum"
                required
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
                  onChange={departmentChangeHandler}
                  defaultValue={"DEFAULT"}
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
                  onChange={is_managerChangeHandler}
                  defaultValue={props.is_manager}
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
          <button onClick={createNewEmployee} className="button is-link">
            Save changes
          </button>
        </form>
      </section>
    </div>
  );
}
