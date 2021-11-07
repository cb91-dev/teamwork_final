import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import junk from "./junk";

export default class ScheduleMaker extends React.Component {
  sendingDateDataToForm = (res) => {
    this.props.dateClicked(res.dateStr);
  };
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      user: props.employees_idNumber,
      renderData: props.renderData,
    };
  }
  calendarRef = React.createRef(null);

  onShiftAdded() {
    let a = this.props.renderData;
    console.log(a);
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.addEvent(a);
  }

  render() {
    return (
      <div className="panel has-background-white">
        <button onClick={this.onShiftAdded}></button>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          // dateClick={this.handleDateClick}
          ref={this.calendarRef}
          select={this.handleDateSelect}
          dateClick={this.sendingDateDataToForm}
          initialView="dayGridMonth"
        />
      </div>
    );
  }
}
