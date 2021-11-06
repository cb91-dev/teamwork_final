document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    forceEventDuration: true,
    headerToolbar: {
      left: "prev,next",
      center: "addEventButton",
      right: "dayGridMonth,timeGridWeek",
    },
    customButtons: {
      addEventButton: {
        text: "add event...",
        click: function () {
          var dateStr = prompt("Enter a date in YYYY-MM-DD format");
          var date = new Date(dateStr + "T00:00:00"); // will be in local time

          if (!isNaN(date.valueOf())) {
            // valid?
            calendar.addEvent({
              title: "dynamic event",
              start: date,
              allDay: true,
            });
            alert("Great. Now, update your database...");
          } else {
            alert("Invalid date.");
          }
        },
      },
    },
    eventClick: function (info) {
      alert("Event: " + info.event.title);
      alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
      alert("View: " + info.view.type);

      // change the border color just for fun
      info.el.style.borderColor = "red";
    },
    dateClick: function () {},
  });
  calendar.render();
  calendar.on("dateClick", function (info) {
    console.log("clicked on " + info.dateStr);
  });
});
