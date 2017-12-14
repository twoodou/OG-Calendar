import React from "react";
import { dateFns, format, formatDistance, formatRelative, subDays } from 'date-fns';


const DayHeader = () => {
  return (
    <div className="Calendar_Day_Headers">
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
    </div>
  )
}

export default DayHeader;