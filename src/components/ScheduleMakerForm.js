import React, { useState, useEffect, useRef } from "react";

export default function ScheduleMakerForm(props) {
  const users = Object.values(props.usersInfo);

  const [scheduleData, setscheduleData] = useState([]);
  const [didChange, setDidChange] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dateTest = useRef(null);
  useEffect(() => {
    if (props.modalShow && !modalOpen) {
      // the window has just been opened
      // setscheduleData
      dateTest.current.value = props.dateClicked;
      setscheduleData({
        ...scheduleData,
        scheduleDate: dateTest.current.value,
      });
      setModalOpen(true);
      console.log("windowOpen");
    }
    if (!props.modalShow && modalOpen) {
      // the window has just been closed
      setModalOpen(false);
      console.log("windowClose");
    }
  });

  const scheduleDateChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      scheduleDate: event.target.value,
    });
  };
  const scheduleStartChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      startTime: event.target.value,
    });
  };
  const scheduleFinishChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      finishTime: event.target.value,
    });
  };
  const scheduleNameChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      employees_idNumber: event.target.value,
    });
  };

  const scheduleMsgChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      shiftMsg: event.target.value,
    });
  };

  const scheduleDepartmentChangeHandler = (event) => {
    setscheduleData({
      ...scheduleData,
      department: event.target.value,
    });
  };
  const handleReset = () => {
    Array.from(document.querySelectorAll(".scheduleInputs")).forEach(
      (input) => (input.value = "")
    );
    setscheduleData([]);
  };

  function createNewShift(evt) {
    const newShift = {
      scheduleData,
    };
    evt.preventDefault(evt);
    evt.stopPropagation();
    evt.nativeEvent.stopImmediatePropagation();
    var url = "http://localhost:8888/api/api.php?action=addSchedule";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newShift),
      credentials: "include",
    }).then(function (headers) {
      if (headers.status === 201) {
        console.log("it worked from this end");
        props.showAlert("success", "Shift added");
        props.closer();
        console.log(scheduleData);
        handleReset();
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
      <form onSubmit={createNewShift} id="createNewShiftForm">
        <div className="field">
          <label className="label">Date</label>
          <div className="control">
            <input
              className="input is-link scheduleInputs"
              type="date"
              placeholder="Text input"
              onChange={scheduleDateChangeHandler}
              id="date"
              ref={dateTest}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Start Time</label>
          <div className="control has-icons-left">
            <input
              className="input is-link scheduleInputs"
              type="text"
              placeholder="Start of shift"
              onChange={scheduleStartChangeHandler}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-clock"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Finish Time</label>
          <div className="control has-icons-left">
            <input
              onChange={scheduleFinishChangeHandler}
              className="input is-link scheduleInputs"
              type="text"
              placeholder="End of shift"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-history"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Employee</label>
          <div className="control">
            <div className="select is-link">
              <select onChange={scheduleNameChangeHandler}>
                <option disabled>Select Employee</option>
                {users.map((user, index) => (
                  <option
                    key={user.employees_idNumber}
                    id={user.employees_idNumber}
                    value={user.employees_idNumber}
                  >
                    {user.firstName + " " + user.lastName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Shift Message</label>
          <div className="control">
            <textarea
              onChange={scheduleMsgChangeHandler}
              className="textarea is-link scheduleInputs"
              placeholder="Some message for the shift/employee"
            ></textarea>
          </div>
        </div>

        <div className="field">
          <p className="label">Department</p>
          <p className="pb-2">Please select one from below</p>
          <div className="control">
            <label className="radio pt-1">
              <input
                onChange={scheduleDepartmentChangeHandler}
                type="checkbox"
                name="Front_Counter"
                id="Front_Counter"
                value="Front_Counter"
                className="scheduleInputs"
              />
              Front Counter
            </label>
            <label className="radio px-1 pt-1">
              <input
                onChange={scheduleDepartmentChangeHandler}
                type="checkbox"
                name="Fresh_Produce"
                id="Fresh_Produce"
                value="Fresh_Produce"
                className="scheduleInputs"
              />
              Fresh Produce
            </label>
            <label className="radio pt-1">
              <input
                onChange={scheduleDepartmentChangeHandler}
                type="checkbox"
                name="Bakery"
                id="Bakery"
                value="Bakery"
                className="scheduleInputs"
              />
              Bakery
            </label>
            <label className="radio pl-1 pt-1">
              <input
                onChange={scheduleDepartmentChangeHandler}
                type="checkbox"
                name="Deli"
                id="Deli"
                value="Deli"
                className="scheduleInputs"
              />
              Deli
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
