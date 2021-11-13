import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default function ScheduleMakerCalendar(props) {
  const [eventData, setEventData] = useState([]);

  const sendingDateDataToForm = (evt) => {
    props.dateClicked(evt);
  };

  // // // Local host/local development
  const url = "http://localhost:8888/api/api.php";

  // // Hosting URL
  // const url = "https://bennettdesigns.dev/teamwork/api/api.php";
  useEffect(() => {
    fetch(url + "?action=viewFullSchedule", { credentials: "include" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((res) => {
        let formattedDate = res.map((entry) => ({
          title: entry.Department,
          start: entry.startDate_Time,
          end: entry.finishDate_Time,
        }));
        setEventData(formattedDate);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        // dateClick={this.handleDateClick}
        // ref={calendarRef}
        events={eventData}
        dateClick={sendingDateDataToForm}
        initialView="dayGridMonth"
      />
    </div>
  );
}
