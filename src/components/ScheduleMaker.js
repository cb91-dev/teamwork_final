import React, { useState } from "react";
import ScheduleMakerForm from "./ScheduleMakerForm";
import ScheduleMakerCalendar from "./ScheduleMakerCalendar";

export default function ScheduleMaker(props) {
  const [modalShow, setModalShow] = useState(false);
  const [dateClicked, setDateClicked] = useState([]);
  const [info, setInfo] = useState([]);
  const [renderData, setRenderData] = useState([]);

  function parentCallBackSendRenderData(renderData) {
    setRenderData(renderData);
    console.log(renderData);
  }
  function parentCallBackdateClicked(dateClicked) {
    setDateClicked(dateClicked);
    setModalShow(true);
  }
  function opener() {
    setModalShow(true);
  }
  function closer() {
    setModalShow(false);
  }
  const createNewShift = (scheduleData) => {
    setInfo(scheduleData);
    console.log(scheduleData);
  };

  return (
    <div>
      <article className="panel is-link">
        <p className="panel-heading is-link" onClick={opener}>
          ScheduleMaker
        </p>
        <div className="panel has-background-white">
          <ScheduleMakerCalendar
            renderData={renderData}
            dateClicked={parentCallBackdateClicked}
          />
        </div>
      </article>
      <div className={`modal ${modalShow ? "is-active" : null}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create a Shift</p>
            <button
              className="delete has-background-danger"
              aria-label="close"
              onClick={closer}
            ></button>
          </header>
          <section className="modal-card-body">
            {" "}
            <ScheduleMakerForm
              parentCallBackSendRenderData={parentCallBackSendRenderData}
              dateClicked={dateClicked}
              usersInfo={props.user}
              modalShow={modalShow}
              createNewShift={createNewShift}
              showAlert={props.showAlert}
              closer={closer}
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-link" form="createNewShiftForm">
              Save changes
            </button>
            <button className="button is-danger" onClick={closer}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
