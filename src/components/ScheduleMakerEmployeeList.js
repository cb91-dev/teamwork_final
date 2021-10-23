import React from "react";

export default function ScheduleMakerEmployeeList(props) {
  return (
    <div>
      <option defaultValue={props.firstName + " " + props.lastName} />
    </div>
  );
}
