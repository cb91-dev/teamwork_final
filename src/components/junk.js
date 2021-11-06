//      // var url =
//                 //   "http://localhost:8888/api/api.php?action=addSchedule";
//                 // FETCH LOCATION STILL NEEDS TO BE BUILT
//     this.EmployeeDataList = {
//         employees_idNumber: props.employees_idNumber,
//         firstName: props.firstName,
//         lastName: props.lastName,
//         showAlert: props.showAlert,
//         department: props.department,
//         dateRange: props.dateRange,
//       };

//       this.departmentUpdateChangeHandler =
//         this.departmentUpdateChangeHandler.bind(this);
//       this.dateChangeHandler = this.dateChangeHandler.bind(this);
//       this.startTimeChangeHandlerChangeHandler =
//         this.startTimeChangeHandlerChangeHandler.bind(this);
//       this.finishTimeChangeHandlerChangeHandler =
//         this.finishTimeChangeHandlerChangeHandler.bind(this);
//       this.employeeIdHandler = this.employeeIdHandler.bind(this);
//       this.is_managerChangeHandler = this.is_managerChangeHandler.bind(this);
//     }
//     state = { isActive: false };
//     handleToggle = () => {
//       this.setState({ isActive: !this.state.isActive });
//       console.log(this.EmployeeDataList);
//       this.props.showAlert("error", "its workings");
//     };
//     dateChangeHandler(event) {
//       this.setState({
//         dateStart: event.target.value,
//       });
//     }
//     startTimeChangeHandlerChangeHandler(event) {
//       this.setState({
//         d: event.target.value,
//       });
//     }
//     finishTimeChangeHandlerChangeHandler(event) {
//       this.setState({
//         dateEnd: event.target.value,
//       });
//     }
//     departmentUpdateChangeHandler(event) {
//       this.setState({
//         department: event.target.value,
//       });
//     }

//     is_managerChangeHandler(event) {
//       this.setState({
//         is_manager: event.target.value,
//       });
//     }
//     employeeIdHandler(event) {
//       this.setState({
//         employees_idNumber: event.target.value,
//       });
//     }
//     shiftInfoChangeHandler(event){
//       this.setState({
//         shiftInfo: event.target.value,
//       })
//     }

//     import React from "react";
// import FullCalendar, { formatDate } from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// class SceduleMaker extends React.Component {
//   constructor(props) {
//     super(props);

//     this.EmployeeDataList = {
//       employees_idNumber: props.employees_idNumber,
//       firstName: props.firstName,
//       lastName: props.lastName,
//       showAlert: props.showAlert,
//       department: props.department,
//       dateRange: props.dateRange,
//     };

//     this.departmentUpdateChangeHandler =
//       this.departmentUpdateChangeHandler.bind(this);
//     this.dateChangeHandler = this.dateChangeHandler.bind(this);
//     this.startTimeChangeHandlerChangeHandler =
//       this.startTimeChangeHandlerChangeHandler.bind(this);
//     this.finishTimeChangeHandlerChangeHandler =
//       this.finishTimeChangeHandlerChangeHandler.bind(this);
//     this.employeeIdHandler = this.employeeIdHandler.bind(this);
//     this.is_managerChangeHandler = this.is_managerChangeHandler.bind(this);
//   }
//   state = { isActive: false };
//   handleToggle = () => {
//     this.setState({ isActive: !this.state.isActive });
//     console.log(this.EmployeeDataList);
//     this.props.showAlert("error", "its workings");
//   };
//   dateChangeHandler(event) {
//     this.setState({
//       dateStart: event.target.value,
//     });
//   }
//   startTimeChangeHandlerChangeHandler(event) {
//     this.setState({
//       d: event.target.value,
//     });
//   }
//   finishTimeChangeHandlerChangeHandler(event) {
//     this.setState({
//       dateEnd: event.target.value,
//     });
//   }
//   departmentUpdateChangeHandler(event) {
//     this.setState({
//       department: event.target.value,
//     });
//   }

//   is_managerChangeHandler(event) {
//     this.setState({
//       is_manager: event.target.value,
//     });
//   }
//   employeeIdHandler(event) {
//     this.setState({
//       employees_idNumber: event.target.value,
//     });
//   }

//   workEvents = {
//     weekendsVisible: true,
//     currentEvents: [],
//   };

//   render() {
//     const isActive = this.state.isActive;
//     return (
//       <div className="panel is-link has-background-white">
//         <div className="panel-heading has-background-link">
//           <p>Schedule Maker</p>
//         </div>
//         <div className={`modal ${isActive ? "is-active" : null}`}>
//           <div className="modal-background"></div>
//           <div className="modal-card">
//             <header className="modal-card-head">
//               <p className="modal-card-title">Create New Shift</p>
//               <button
//                 className="delete has-background-danger"
//                 onClick={this.handleToggle}
//                 aria-label="close"
//               ></button>
//             </header>
//             <section className="modal-card-body">
//               <form>
//                 <div className="field">
//                   <label className="label">Date</label>
//                   <div className="control has-icons-left">
//                     <input
//                       onChange={this.dateStartChangeHandler}
//                       className="input is-success"
//                       type="date"
//                       placeholder="Text input"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Start Time</label>
//                   <div className="control has-icons-left">
//                     <input
//                       onChange={this.dateEndChangeHandler}
//                       className="input is-success"
//                       type="text"
//                       placeholder="Text input"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Finish Time</label>
//                   <div className="control has-icons-left">
//                     <input
//                       onChange={this.finishTimeChangeHandler}
//                       className="input is-success"
//                       type="text"
//                       placeholder="Text input"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Employee</label>
//                   <div className="control">
//                     <div className="select">
//                       <select onChange={this.employeeIdHandler}>
//                         <option>Select dropdown</option>
//                         <option>With options</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="field">
//                   <label className="label">Department</label>
//                   <div className="control">
//                     <div className="select">
//                       <select>
//                         <option disabled value="DEFAULT">
//                           {" "}
//                           -- select a department --{" "}
//                         </option>
//                         <option value="Front_Counter">Front Counter</option>
//                         <option value="Fresh_Produce">Fresh Produce</option>
//                         <option value="Bakery">Bakery</option>
//                         <option value="Deli">Deli</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="field">
//                   <label className="label">Sh</label>
//                   <div className="control has-icons-left">
//                     <input
//                       onChange={this.finishTimeChangeHandler}
//                       className="input is-success"
//                       type="text"
//                       placeholder="Text input"
//                     />
//                     <span className="icon is-small is-left">
//                       <i className="fas fa-user"></i>
//                     </span>
//                   </div>
//                 </div>
//               </form>
//             </section>
//             <footer className="modal-card-foot">
//               <button
//                 className="button is-success"
//                 onClick={this.handleDateSelect}
//               >
//                 Save changes
//               </button>
//               <button className="button" onClick={this.handleToggle}>
//                 Cancel
//               </button>
//             </footer>
//           </div>
//         </div>
//         <div className="panel-body">
//           <div className="demo-app">
//             {this.renderSidebar()}
//             <div className="demo-app-main">
//               <FullCalendar
//                 plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                 headerToolbar={{
//                   left: "prev,next today",
//                   center: "title",
//                   right: "dayGridMonth,timeGridWeek",
//                 }}
//                 initialView="dayGridMonth"
//                 editable={true}
//                 selectable={true}
//                 selectMirror={true}
//                 dayMaxEvents={true}
//                 // initialEvents={this.state.currentEvents} // alternatively, use the `events` setting to fetch from a feed
//                 select={this.handleToggle}
//                 onClick={this.getDate}
//                 eventContent={renderEventContent} // custom render function
//                 eventClick={this.handleEventClick}
//                 eventsSet={this.addEvents} // called after events are initialized/added/changed/removed
//                 /* you can update a remote database when these fire:
//             eventAdd={function(){}}*/

//                 // var url =
//                 //   "http://localhost:8888/api/api.php?action=addSchedule";
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   renderSidebar() {
//     return (
//       <div className="demo-app-sidebar">
//         <div className="demo-app-sidebar-section">
//           <h2>Instructions</h2>
//           <ul>
//             <li>Select dates and you will be prompted to create a new event</li>
//             <li>Drag, drop, and resize events</li>
//             <li>Click an event to delete it</li>
//             <li
//               onClick={() => {
//                 console.log(this.props.firstName);
//               }}
//             ></li>
//           </ul>
//         </div>
//       </div>
//     );
//   }

//   createEventId() {
//     let eventGuid = 0;
//     return String(eventGuid++);
//   }

//   handleDateSelect = (selectInfo) => {
//     let title = prompt("Please enter a new title for your event");
//     let employeeID = 3;
//     let backgroundColor = "";
//     if ((this.department = "Front_Counter")) {
//       backgroundColor = "black";
//     }
//     if ((this.department = "Fresh_Produce")) {
//       backgroundColor = "green";
//     }
//     if ((this.department = "Bakery")) {
//       backgroundColor = "red";
//     }
//     if ((this.department = "Deli")) {
//       backgroundColor = "blue";
//     }
//     let key = this.createEventId();
//     let calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // clear date selection

//     if (title && employeeID) {
//       calendarApi.addEvent({
//         id: this.createEventId(),
//         employeeID,
//         title,
//         key,
//         // backgroundColor,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay,
//       });
//     }
//   };

//   handleEventClick = (clickInfo) => {
//     if (
//       alert(
//         `Are you sure you want to delete the event '${clickInfo.event.title}'`
//       )
//     ) {
//       clickInfo.event.remove();
//     }
//   };

//   addEvents = (events) => {
//     this.setState({
//       currentEvents: events,
//     });
//     let newdates = this.currentEvents;
//   };
// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   );
// }

// function renderSidebarEvent(event) {
//   return (
//     <li key={event.id}>
//       <b>
//         {formatDate(event.start, {
//           year: "numeric",
//           month: "short",
//           day: "numeric",
//         })}
//       </b>
//       <i>{event.title}</i>
//     </li>
//   );
// }
// export default SceduleMaker;
const events = [
  { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
  {
    title: "Long Event",
    start: getDate("YEAR-MONTH-07"),
    end: getDate("YEAR-MONTH-10"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
  },
  {
    title: "Conference",
    start: "YEAR-MONTH-17",
    end: getDate("YEAR-MONTH-19"),
  },
  {
    title: "Meeting",
    start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
    end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
  },
  { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
  { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
  { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
  { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
  { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
];
function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}
export default events;
