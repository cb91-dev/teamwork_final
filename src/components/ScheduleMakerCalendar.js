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
    };
  }

  componentDidMount() {
    fetch("http://localhost:8888/api/api.php?action=viewFullSchedule")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
  }

  render() {
    console.log(this.state.items);
    return (
      <div className="panel has-background-white">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          // dateClick={this.handleDateClick}
          events={junk}
          select={this.handleDateSelect}
          dateClick={this.sendingDateDataToForm}
          initialView="dayGridMonth"
        />
      </div>
    );
  }
  handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
}
