import React from "react";

export default function EmployeeForm(props) {
  function updateMyDetailsViewForm(evt) {
    const water = {
      employees_idNumber: document.getElementById("employees_idNumber_view")
        .value,
      firstName: document.getElementById("first_name_admin_view").value,
      lastName: document.getElementById("last_name_admin_view").value,
      DOB: document.getElementById("dataOfBirth_admin_view").value,
      email: document.getElementById("email_admin_view").value,
      phone_number: document.getElementById("phone_number_admin_view").value,
      clock_Number: document.getElementById("clock_Number_admin_view").value,
      department: document.getElementById("department_admin_view").value,
      is_manager: document.getElementById("manager_admin_view").value,
    };
    evt.preventDefault();
    // document.getElementById("loader").classList.remove("hidden");
    var url = "http://localhost:8888/api/api.php?action=upDateEmployee";
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
            <label className="label">Employee Id</label>
            <div className="control has-icons-left has-icons-right">
              <input
                readOnly
                value={props.employees_idNumber}
                id="employees_idNumber_view"
                name="employees_idNumber"
                type="text"
                className="is-size-3"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                defaultValue={props.firstName}
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
                id="dataOfBirth_admin_view"
                className="input is-link"
                type="date"
                name="DOB"
                value="2018-07-22"
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
                id="phone_number_admin_view"
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

// fetch(url, { credentials: "include" }).then(function (response) {
//   if (response.status === 201) {
//     response.json().then((data) => {
//       document.getElementById("first_name_admin_view").value =
//         data.firstName;
//       document.getElementById("last_name_admin_view").value = data.lastName;
//       document.getElementById("dataOfBirth_admin_view").value = data.DOB;
//       document.getElementById("department_admin_view").value =
//         data.department;
//       document.getElementById("email_admin_view").value = data.email;
//       document.getElementById("phone_number_admin_view").value =
//         data.phone_number;
//       document.getElementById("clock_Number_admin_view").value =
//         data.clock_Number;
//       document.getElementById("clock_Number_admin_view").value =
//         data.clock_Number;
//     });
//     if (response.status === 400) {
//       console.log(1);
//     }
//     if (response.status === 429) {
//       console.log(1);
//     }
//     if (response.status === 500) {
//       console.log(1);
//     }
//   }
// });
