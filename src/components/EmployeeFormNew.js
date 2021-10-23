import React from "react";

export default function EmployeeForm(props) {
  function createNewEmployee(evt) {
    const water = {
      a: document.getElementById("employees_idNumber_view").value,
      b: document.getElementById("first_name_admin_view").value,
      c: document.getElementById("last_name_admin_view").value,
      d: document.getElementById("dataOfBirth_admin_view").value,
      e: document.getElementById("email_admin_view").value,
      f: document.getElementById("password_admin_view").value,
      f: document.getElementById("phone_number_admin_view").value,
      f: document.getElementById("clock_Number_admin_view").value,
      f: document.getElementById("department_admin_view").value,
      f: document.getElementById("manager_admin_view").value,
    };
    evt.preventDefault();
    // document.getElementById("loader").classList.remove("hidden");
    var url = "http://localhost:8888/api/api.php?action=upDateMyDetails";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(water),
      credentials: "include",
    }).then(function (headers) {
      if (headers.status === 201) {
        console.log("it worked from this end");
      }
      if (headers.status === 400) {
        console.log(1);
      }
      if (headers.status === 429) {
        console.log(1);
      }
      if (headers.status === 500) {
        console.log(1);
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
                id="first_name_admin_view"
                className="input is-link"
                type="text"
                placeholder="Text input"
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
                id="last_name_admin_NEW"
                className="input is-link"
                type="text"
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
                id="dataOfBirth_admin_NEW"
                className="input is-link"
                type="data"
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
                className="input is-link"
                id="email_admin_NEW"
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
            <label className="label">Password</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-link"
                id="password_admin_NEW"
                type="password"
                name="pword"
                required
                data-bouncer-message="Password must contain a min of 6 characters long with one upper case chartcter and at least one digit"
                pattern="((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$"
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
                id="phone_number_admin_NEw"
                className="input is-link"
                type="text"
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
                id="clock_Number_admin_NEW"
                type="number"
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
                  defaultValue={"DEFAULT"}
                  id="department_admin_NEW"
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
                  defaultValue={props.is_manager}
                  id="manager_admin_NEW"
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
