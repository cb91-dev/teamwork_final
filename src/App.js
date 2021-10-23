import React from "react";
import Employee from "./components/Employee";
import ScheduleMarker from "./components/ScheduleMaker";

export default function App() {
  return (
    <div>
      <h1 className="has-text-white has-text-centered is-size-4 pt-2">
        {" "}
        Admin
      </h1>
      <Employee />
      <ScheduleMarker />
    </div>
  );
}
